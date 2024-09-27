from django.db import models

# Create your models here.

class receita(models.Model):
    nome = models.CharField(max_length = 100)
    