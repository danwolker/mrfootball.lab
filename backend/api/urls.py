from django.urls import path
from .views import register_news_consumer, see_news_consumer, get_soccer_boots,add_boot_to_cart, get_cart_products,get_brands, get_colors, get_boots_in_cart, increase_boot_amount_in_cart, decrease_boot_amount_in_cart
urlpatterns = [
    path('list_newsletter_consumers', see_news_consumer, name='list_news_consumer'),
    path('create_newsletter_consumer', register_news_consumer, name='create_news_consumer'),
    path('get_soccer_boots', get_soccer_boots, name='get_soccer_boots'),
    path('add_boot_to_cart', add_boot_to_cart, name='add_to_cart'),
    path('get_cart_products', get_cart_products, name='get_cart_producuts'),
    path('get_brands', get_brands, name='get_brands'),
    path('get_colors', get_colors, name='get_colors'),
    path('get_boots_in_cart', get_boots_in_cart, name='get_boots_in_cart' ),
    path('increase_boot_amount_in_cart', increase_boot_amount_in_cart, name='increase_boot_amount_in_cart'),
    path('decrease_boot_amount_in_cart', decrease_boot_amount_in_cart, name='decrease_boot_amount_in_cart')
]