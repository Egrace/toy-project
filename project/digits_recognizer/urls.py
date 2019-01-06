from django.urls import path
from . import views


urlpatterns = [
    path('recognize_digit', views.PerformRecognize.as_view()),
]
