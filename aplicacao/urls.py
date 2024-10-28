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
    path('criar_pasta/', views.CreateFolderView.as_view(), name='criar_pasta'),
    path('minhas_pastas/', views.PastasView.as_view(), name='minhas_pastas'),
    path('adicionar_a_pasta/<int:receita_id>/', views.AdicionarReceitaAPastaView.as_view(), name='adicionar_a_pasta'),
    path('pasta/<int:pasta_id>/receitas/', views.ReceitasPastaView.as_view(), name='receitas_pasta'),
<<<<<<< HEAD
=======
    path('delete_all/', views.DeleteAllReceitasView.as_view(), name='delete_all_receitas'),
    path('timer/', views.TimerView.as_view(), name='timer'),
>>>>>>> 1298e60a8c57ec5d6214ee8cb4d50e51f02a95e6
]
