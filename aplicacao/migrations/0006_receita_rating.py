# Generated by Django 5.1.2 on 2024-10-09 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacao', '0005_remove_receita_estrelas_alter_receita_comentarios'),
    ]

    operations = [
        migrations.AddField(
            model_name='receita',
            name='rating',
            field=models.IntegerField(default='0'),
        ),
    ]
