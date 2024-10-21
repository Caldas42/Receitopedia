from django.urls import path
from . import views

app_name = 'aplicacao'

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('adicionar/', views.AddView.as_view(), name="adicionar"),
    path('visualizar/<int:id>/', views.RecipeDetailView.as_view(), name='visualizar'),
    path('excluir/<int:id>/', views.DeleteView.as_view(), name='excluir'),
    path('rating/<int:id>/', views.RateView.as_view(), name='rating'),
    path('editar/<int:id>/', views.EditarView.as_view(), name='editar'),
    path('criar_pasta/', views.criar_pasta, name='criar_pasta'),
    path('minhas_pastas/', views.minhas_pastas, name='minhas_pastas'),
    path('adicionar_a_pasta/<int:receita_id>/', views.AdicionarReceitaAPastaView.as_view(), name='adicionar_a_pasta'),
    ]
