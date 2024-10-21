from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Pasta(models.Model):
    nome = models.CharField(max_length=100)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class receita(models.Model):
    nome = models.CharField(max_length=100)
    ingredientes = models.TextField(default="Ingredientes não informados")
    modo_preparo = models.TextField(default="Ingredientes não informados")
    comentarios = models.TextField(default="Comentários não informados")
    rating = models.IntegerField(default="0")
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    pasta = models.ForeignKey(Pasta, on_delete=models.SET_NULL, null=True, blank=True)
