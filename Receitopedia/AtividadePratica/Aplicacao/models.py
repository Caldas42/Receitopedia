from django.db import models

# Create your models here.

class Pokemon(models.Model):
    nome = models.CharField(max_length=100)
    tipo1 = models.CharField(max_length=50)
    tipo2 = models.CharField(max_length=50, blank=True, null=True)
    hp = models.IntegerField()
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    descricao = models.TextField()
    imagem = models.URLField(max_length=200)
    
    # CharField -> Campo de Caracteres
    # max_length -> Máximo de Caracteres
    # blank=True -> Permite que o dado esteja em branco
    # null=True -> Permite que o dado seja nulo
    # IntegerField -> Campo de números inteiros
    # DecimalField -> Campos de números decimais
    # max_digits -> Máximo de dígitos
    # decimal_places -> Número de casas decimais
    # TextField -> Campo de Texto (Para textos grandes)
    # URLField -> Campo de URLs/Links