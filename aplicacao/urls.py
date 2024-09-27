from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name="home"),
    path('adicionar/', views.adicionar, name="adicionar")
]