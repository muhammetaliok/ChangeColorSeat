from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
path('change-color/',views.change_color,name='change-color'),
]