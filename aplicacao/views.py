from django.shortcuts import redirect, render, get_object_or_404
from .models import receita
from django.views import View

# Create your views here.

class HomeView(View):
    def get(self, request):
        Receita = receita.objects.all()

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

            Receita = receita(nome=nome, ingredientes=ingredientes, modo_preparo=modo_preparo, comentarios=comentarios)
            
            Receita.save()

            return redirect('aplicacao:home')

class RecipeDetailView(View):
    def get(self, request, id):
        ctx={'Receita':receita.objects.filter(id=id).first()}

        return render(request,'visualizar.html',ctx)

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
    
def editar_receita(request,id):
    Receita = receita.objects.filter(id=id).first()
    
    if request.method == 'POST':
        nome = request.POST.get('nome')
        ingredientes = request.POST.get('ingredientes')
        modo_preparo = request.POST.get('modo_preparo')
        comentarios = request.POST.get('comentarios')

        Receita.nome = nome
        Receita.ingredientes = ingredientes
        Receita.modo_preparo = modo_preparo
        Receita.comentarios = comentarios
        Receita.save()

        return redirect('aplicacao:home')

    return render(request, 'editar_receita.html', {'Receita': Receita})