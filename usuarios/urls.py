from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('registrar/', views.registrar_view, name='registrar'),
    path('delete_cypress/', views.Deletar_Cypress.as_view(), name='delete_cypress'),
]
