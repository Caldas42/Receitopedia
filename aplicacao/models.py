from django.db import models

# Create your models here.

class receita(models.Model):
    nome = models.CharField(max_length = 100)
    #ingredientes = models.CharField(max_length = 1000)
    #modo_de_preparo = models.CharField(max_length = 2000)

#class RECEITA(models.Model):
    #nome = models.CharField(max_length = 100)
    #ingredientes = models.CharField(max_length = 1000)
    #modo_de_preparo = models.CharField(max_length = 2000)