from django.db import models

# Create your models here.

class receita(models.Model):
    nome = models.CharField(max_length=100)
    ingredientes = models.TextField(default="Ingredientes não informados")
    modo_preparo = models.TextField(default="Ingredientes não informados")
    comentarios = models.TextField(default="Comentários não informados")
