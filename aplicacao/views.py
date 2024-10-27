from django.shortcuts import redirect, render, get_object_or_404
from .models import receita, Pasta, ReceitaSalva
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages

import random

class HomeView(LoginRequiredMixin, View):
    login_url = 'login'
    
    def get(self, request):

        if request.user.is_authenticated:
            Receita = receita.objects.filter(user=request.user)

            receitas_salvas = ReceitaSalva.objects.filter(user=request.user).values_list('receitaSalva', flat=True)
            receitas_salvas = receita.objects.filter(id__in=receitas_salvas)

            ctx = {
                'todas_as_receitas': Receita,
                'receitas_salvas': receitas_salvas,
            }
            return render(request, 'home.html', ctx)

class AddView(View):
    def get(self, request):
        return render(request, 'adicionar.html')

    def post(self, request):
        nome = request.POST.get('nome')
        ingredientes = request.POST.get('ingredientes')
        modo_preparo = request.POST.get('modo_preparo')
        comentarios = request.POST.get('comentarios')
        user = request.user
        if request.user.id == 11:
            sugestao = True
        else:
            sugestao = False

        Receita = receita(nome=nome, ingredientes=ingredientes, modo_preparo=modo_preparo, comentarios=comentarios, user=user, sugestao=sugestao)
        Receita.save()

        return redirect('aplicacao:home')

class RecipeDetailView(View):
    def get(self, request, id):
        receita_obj = get_object_or_404(receita, id=id)
        pastas = Pasta.objects.filter(usuario=request.user)
        ctx = {'Receita': receita_obj, 'pastas': pastas}
        return render(request, 'visualizar.html', ctx)

class DeleteView(View):
    def post(self, request, id):
        Receita = get_object_or_404(receita, id=id)
        Receita.delete()
        return redirect('aplicacao:home')

class RateView(View):
    def post(self, request, id):
        Receita = get_object_or_404(receita, id=id)
        rating = request.POST.get('rating')

        if not rating:
            # Retorna uma mensagem de erro ou redireciona de volta para a página
            messages.error(request, 'Por favor, selecione uma avaliação.')
            return redirect('aplicacao:visualizar', id=id)

        Receita.rating = rating
        Receita.save()
        return redirect('aplicacao:home')

class EditarView(View):
    def get(self, request, id):
        receita_obj = get_object_or_404(receita, id=id)
        return render(request, 'editar_receita.html', {'receita': receita_obj})

    def post(self, request, id):
        receita_obj = get_object_or_404(receita, id=id)

        receita_obj.nome = request.POST.get('nome')
        receita_obj.ingredientes = request.POST.get('ingredientes')
        receita_obj.modo_preparo = request.POST.get('modo_preparo')
        receita_obj.comentarios = request.POST.get('comentarios')
        receita_obj.save()

        return redirect('aplicacao:visualizar', id=receita_obj.id)
    
class CreateFolderView(View):
    def post(self, request):
        nome = request.POST.get('nome')
        if nome:
            pasta = Pasta(nome=nome, usuario=request.user)
            pasta.save()
            return redirect('aplicacao:minhas_pastas')
        else:
            return render(request, 'criar_pasta.html', {'error': 'O nome da pasta é obrigatório.'})
    
    def get(self, request):
        return render(request, 'criar_pasta.html')

class PastasView(View):
    def get(self, request):
        pastas = Pasta.objects.filter(usuario=request.user)
        receitas = receita.objects.filter(user=request.user)
        return render(request, 'minhas_pastas.html', {'pastas': pastas, 'receitas': receitas})

class AdicionarReceitaAPastaView(View):
    def get(self, request, receita_id):
        pastas = Pasta.objects.filter(usuario=request.user)
        return render(request, 'adicionar_a_pasta.html', {'pastas': pastas, 'receita_id': receita_id})

    def post(self, request, receita_id):
        pasta_id = request.POST.get('pasta_id')
        pasta_obj = get_object_or_404(Pasta, id=pasta_id, usuario=request.user)
        receita_obj = get_object_or_404(receita, id=receita_id)

        receita_obj.pasta = pasta_obj
        receita_obj.save()

        return redirect('aplicacao:visualizar', id=receita_id)
 
class ReceitasPastaView(View):
    def get(self, request, pasta_id):
        pasta = get_object_or_404(Pasta, id=pasta_id, usuario=request.user)
        receitas = receita.objects.filter(pasta=pasta)  # Pega as receitas que estão nessa pasta
        ctx = {
            'pasta': pasta,
            'receitas': receitas,
        }
        return render(request, 'receitas_pasta.html', ctx)
    
class SugestaoView(View):
    login_url = 'login'

    def get(self, request):
        receitas_sugestao = receita.objects.filter(sugestao=True).order_by('?')[:1]
        ctx = {'receitas_sugestao': receitas_sugestao}
        return render(request, 'sugestoes.html', ctx)
    
class SalvarReceitaView(LoginRequiredMixin, View):
    login_url = 'login'

    def post(self, request, receita_id):
        receita_especifica = receita.objects.get(id=receita_id)

        if not ReceitaSalva.objects.filter(user=request.user, receitaSalva=receita_especifica).exists():
            ReceitaSalva.objects.create(user=request.user, receitaSalva=receita_especifica)

        return redirect('aplicacao:sugestoes')
