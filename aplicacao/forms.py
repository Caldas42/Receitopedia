# aplicacao/forms.py

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Pasta

class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']

class PastaForm(forms.ModelForm):
    class Meta:
        model = Pasta
        fields = ['nome']