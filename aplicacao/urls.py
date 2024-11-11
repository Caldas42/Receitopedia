from django.urls import path
from . import views
from .views import ExcluirTagView

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
    path('sugestoes/', views.SugestaoView.as_view(), name='sugestoes'),
    path('salvar_receita/<int:receita_id>/', views.SalvarReceitaView.as_view(), name='salvar_receita'),
    path('delete_all/', views.DeleteAllReceitasView.as_view(), name='delete_all_receitas'),
    path('timer/', views.TimerView.as_view(), name='timer'),
    path('remover_da_pasta/<int:receita_id>/', views.RemoverReceitaDaPastaView.as_view(), name='remover_da_pasta'),
    path('excluir_pasta/<int:pasta_id>/', views.DeletePastaView.as_view(), name='excluir_pasta'),
    path('tags/', views.TagListView.as_view(), name='tags'),
    path('tags/<int:tag_id>/', views.ReceitaPorTagView.as_view(), name='receitas_por_tag'),
    path('criar_tag/', views.CriarTagView.as_view(), name='criar_tag'),  # URL para criar uma nova tag
    path('pesquisar_por_tag/', views.PesquisarPorTagView.as_view(), name='pesquisar_por_tag'),
    path('tags/excluir/<int:tag_id>/', ExcluirTagView.as_view(), name='excluir_tag'),

]
