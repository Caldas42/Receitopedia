from django.shortcuts import redirect, render
from django.shortcuts import render
from .models import Pokemon

# Create your views here.

from django.views import View

class HomeView(View):
    def get(self, request): 
        return render(request, 'home.html')
    # Renderiza home.html sempre que uma requisição GET for feita 
    # através da URL http://127.0.0.1:8000/

class AddView(View):
    def get(self, request): 
        return render(request, 'adicionar.html')
    # Renderiza adicionar.html sempre que uma requisição GET for feita 
    # através da URL http://127.0.0.1:8000/adicionar/

    def post(self, request):
      name = request.POST.get("nome")
      tipo1 = request.POST.get("tipo1")
      tipo2 = request.POST.get("tipo2")
      hp = request.POST.get("hp")
      altura = request.POST.get("altura")
      peso = request.POST.get("peso")
      urlImagem = request.POST.get("imagem")
      descricao = request.POST.get("descricao")

      pokemon = Pokemon(
            nome=name,
            tipo1=tipo1,
            tipo2=tipo2,
            hp=hp,
            altura=altura,
            peso=peso,
            imagem=urlImagem,
            descricao=descricao,
        )
      
      pokemon.save()
      return redirect('aplicacao:home')
# A função redirect recebe como parâmetro o nome do path, então vamos seguir
# a mesmsa sintaxe que vimos anteriormente: nome_da_aplicacao:nome_do_path