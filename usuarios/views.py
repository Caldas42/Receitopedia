from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages

# Create your views here.

def login_view(request):
    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('aplicacao:home')
        else:
            messages.error(request, 'Usuário ou senha incorretos.')

    return render(request, 'login.html')

def registrar_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        password_confirm = request.POST.get('password_confirm')

        if password == password_confirm:
            try:
                User.objects.create_user(username=username, password=password)
                messages.success(request, 'Usuário registrado com sucesso!')
                return redirect('login')
            except Exception as e:
                messages.error(request, 'Erro ao criar usuário. Usuário já existe.')
        else:
            messages.error(request, 'As senhas não correspondem.')

    return render(request, 'registrar.html')

from django.contrib.auth import logout

def logout_view(request):
    logout(request)
    return render(request, 'logout.html')
