from django.shortcuts import redirect, render
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
            estrelas = request.POST.get('estrelas')

            Receita = receita(nome=nome, ingredientes=ingredientes, modo_preparo=modo_preparo, comentarios=comentarios, estrelas=estrelas)
            
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
