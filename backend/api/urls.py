from django.urls import path
from .views import register_news_consumer

urlpatterns = [
    path('api/newsletter', register_news_consumer, name='create_news_consumer')
]