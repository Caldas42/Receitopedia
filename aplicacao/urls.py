from django.urls import path
from . import views

app_name ='aplicacao'

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('adicionar/', views.AddView.as_view(), name="adicionar"),
    path('visualizar/<int:id>/', views.RecipeDetailView.as_view(), name='visualizar'),
    path('excluir/<int:id>/', views.DeleteView.as_view(), name='excluir'),
    path('rating/<int:id>/', views.RateView.as_view(), name='rating'),
    #path('cadastro/', views.x.as_view(), name='cadasto_usuario'),
    #path('criar_conta/', views.x.as_view(), name='criar_conta')
]