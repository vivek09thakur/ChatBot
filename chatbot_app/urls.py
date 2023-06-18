from django.urls import path

from .views import chatbot_view


urlpatterns = [
    path('', chatbot_view, name='index'),
]