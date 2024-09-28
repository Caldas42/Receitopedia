from django.urls import path
from . import views

app_name='aplicacao'

urlpatterns = [
    path('', views.home, name="home"),
    path('adicionar/', views.adicionar, name="adicionar"),
    path('visualizar_todos/', views.visualizar_todos, name="visualizar_todos"),
    path('visualizar/<int:id>/', views.visualizar_um, name='visualizar_um')
]
