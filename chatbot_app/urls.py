from django.urls import path

from chatbot_app.views import chatbot_view


urlpatterns = [
    path('', chatbot_view, name='index'),
]