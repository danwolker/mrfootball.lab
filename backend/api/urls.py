from django.urls import path
from .views import register_news_consumer, see_news_consumer

urlpatterns = [
    path('list_newsletter_consumers', see_news_consumer, name='list_news_consumer'),
    path('create_newsletter_consumer', register_news_consumer, name='create_news_consumer'),
]