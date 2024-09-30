from django.urls import path
from . import views

app_name ='aplicacao'

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('adicionar/', views.AddView.as_view(), name="adicionar"),
    path('visualizar_todos/<int:id>/', views.RecipeDetailView.as_view(), name='visualizar_um'),
     path('excluir/<int:id>/', views.DeleteView.as_view(), name='excluir_receita'),
]
