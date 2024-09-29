from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import receita

# Create your views here.

def home(request):
    Receita = receita.objects.all()

    ctx = {
        'todas_as_receitas': Receita,
    }
    
    return render(request, 'home.html', ctx)

def adicionar(request):
    if request.method == "GET":
        return render(request, 'adicionar.html')
    elif request.method == "POST":
        nome = request.POST.get('nome')
        ingredientes = request.POST.get('ingredientes')
        modo_preparo = request.POST.get('modo_preparo')
        comentarios = request.POST.get('comentarios')

        Receita = receita(nome=nome, ingredientes=ingredientes, modo_preparo=modo_preparo, comentarios=comentarios)
        
        Receita.save()
        return redirect('aplicacao:home')
    
def visualizar_todos(request):
    Receita = receita.objects.all()

    ctx = {
        'todas_as_receitas': Receita,
    }
    return render(request, 'visualizar_todos.html', ctx)

def visualizar_um(request, id):
    ctx={'Receita':receita.objects.filter(id=id).first()}

    return render(request,'visualizar_um.html',ctx)
