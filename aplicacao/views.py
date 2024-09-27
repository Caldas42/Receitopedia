from django.shortcuts import render
from django.http import HttpResponse
from .models import receita

# Create your views here.

def home(request):
    if request.method == "GET":
        return render(request, 'home.html')

def adicionar(request):
    nome = request.POST.get('nome')

    receita = receita(nome=nome)
    return render(request, 'adicionar.html')