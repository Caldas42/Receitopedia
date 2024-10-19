from django.shortcuts import redirect, render, get_object_or_404
from .models import receita
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.

class HomeView(LoginRequiredMixin, View):
    login_url = 'login'
    def get(self, request):
        if request.user.is_authenticated:
            Receita = receita.objects.filter(user=request.user)

            ctx = {
                'todas_as_receitas': Receita,
            }
            
            return render(request, 'home.html', ctx)

class AddView(View):
    def get(self, request):
        if request.method == "GET":
            return render(request, 'adicionar.html')

    def post(self, request):
        if request.method == "POST":
            nome = request.POST.get('nome')
            ingredientes = request.POST.get('ingredientes')
            modo_preparo = request.POST.get('modo_preparo')
            comentarios = request.POST.get('comentarios')
            user=request.user

            Receita = receita(nome=nome, ingredientes=ingredientes, modo_preparo=modo_preparo, comentarios=comentarios, user=user)
            
            Receita.save()

            return redirect('aplicacao:home')

class RecipeDetailView(View):
    def get(self, request, id):
        ctx = {'Receita': receita.objects.filter(id=id).first()}

        return render(request, 'visualizar.html', ctx)

class DeleteView(View):
    def post(self, request, id):
        Receita = receita.objects.filter(id=id).first()

        if Receita:
            Receita.delete()

        return redirect('aplicacao:home')
    
class RateView(View):
    def post(self, request, id):
        Receita = receita.objects.filter(id=id).first()

        if Receita:
            rating = request.POST.get('rating')

            Receita.rating = rating
            Receita.save()

        return redirect('aplicacao:home')
    

class EditarView(View):
    def get(self, request, id):
        receita_obj = get_object_or_404(receita, id=id)
        
        return render(request, 'editar_receita.html', {'receita': receita_obj})

    def post(self, request, id):
        receita_obj = get_object_or_404(receita, id=id)


        novo_nome = request.POST.get('nome')
        novos_ingredientes = request.POST.get('ingredientes')
        novo_modo_preparo = request.POST.get('modo_preparo')
        novos_comentarios = request.POST.get('comentarios')


        nova_receita = receita(
            nome=novo_nome,
            ingredientes=novos_ingredientes,
            modo_preparo=novo_modo_preparo,
            comentarios=novos_comentarios,
            rating=receita_obj.rating  
        )
        nova_receita.save()


        receita_obj.delete()

        return redirect('aplicacao:visualizar', id=nova_receita.id)
