from django.shortcuts import render
from django.http import HttpResponse
from .models import receita

# Create your views here.

def home(request):
    if request.method == "GET":
        return render(request, 'home.html')

def adicionar(request):
    if request.method == "GET":
        return render(request, 'adicionar.html')
    elif request.method == "POST":
        nome = request.POST.get('nome')
        ingredientes = request.POST.get('ingredientes')
        modo_preparo = request.POST.get('modo_preparo')


        Receita = receita(nome=nome, ingredientes=ingredientes, modo_preparo=modo_preparo)
        
        Receita.save()
        return HttpResponse("Receita adicionada com sucesso")
    