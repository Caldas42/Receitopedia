from django.urls import path
from . import views

app_name='aplicacao'

urlpatterns = [
    path('home/', views.home, name="home"),
    path('adicionar/', views.adicionar, name="adicionar")
]
