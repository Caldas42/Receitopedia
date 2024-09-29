from django.urls import path
from . import views

app_name ='aplicacao'

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('adicionar/', views.AddView.as_view(), name="adicionar"),
    path('visualizar_todos/', views.visualizar_todos, name="visualizar_todos"),
    path('visualizar_todos/<int:id>/', views.RecipeDetailView.as_view(), name='visualizar_um')
]
