from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

# Create your views here.

def registrar(request):
    if request.method == "POST": #registrando usuario
        form = UserCreationForm
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'usuarios/registrar.html', {'form': form})