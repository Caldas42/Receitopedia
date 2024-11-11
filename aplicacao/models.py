from django.db import models
from django.contrib.auth.models import User

class Tag(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)


    def __str__(self):
        return self.nome

class Pasta(models.Model):
    nome = models.CharField(max_length=100)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class receita(models.Model):
    nome = models.CharField(max_length=100)
    ingredientes = models.TextField(default="Ingredientes não informados")
    modo_preparo = models.TextField(default="Modo de preparo não informado")
    comentarios = models.TextField(default="Comentários não informados")
    rating = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    sugestao = models.BooleanField(default=False)
    pasta = models.ForeignKey(Pasta, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)  # Relação Many-to-Many com Tag

    def __str__(self):
        return self.nome

class ReceitaSalva(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    receitaSalva = models.ForeignKey(receita, on_delete=models.CASCADE)
    saved_at = models.DateTimeField(auto_now_add=True)
