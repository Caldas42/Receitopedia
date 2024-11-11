from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from django.views import View

# Create your views here.

def login_view(request):
    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('aplicacao:home')

    return render(request, 'login.html')

def registrar_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        password_confirm = request.POST.get('password_confirm')

        if password == password_confirm:
            User.objects.create_user(username=username, password=password)
            return redirect('login')

    return render(request, 'registrar.html')

from django.contrib.auth import logout

def logout_view(request):
    logout(request)
    return render(request, 'logout.html')

class Deletar_Cypress(View):

    def get(self, request):
        return render(request, 'excluir_cypress.html')

    def post(self, request):
        usersCypress = User.objects.filter(username = 'cypress')
        usersCypress.delete()
        return redirect('login')