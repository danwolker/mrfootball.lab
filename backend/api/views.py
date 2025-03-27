from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import NewsLetter, SoccerBoot, BootInCart, Brand
from .serializer import NewsLetterSerializer, SoccerBootSerializer, BrandSerializer
from django.http import HttpResponse

@api_view(['GET'])
def see_news_consumer(request):
    news_consumer = NewsLetter.objects.all()
    serialized_data = NewsLetterSerializer(news_consumer, many=True).data
    return Response(serialized_data)


@api_view(['POST'])
def register_news_consumer(request):
    data = request.data
    serializer = NewsLetterSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_soccer_boots(request):
    if request.GET.get('brand') and request.GET.get('brand') != 'Todas':
        brand = request.GET.get('brand')
        soccer_boots = SoccerBoot.objects.filter(brand__brand=brand)
        serialized_soccer_boots = SoccerBootSerializer(soccer_boots, many=True).data
        return Response(serialized_soccer_boots)
    soccer_boots = SoccerBoot.objects.all()
    serialized_soccer_boots = SoccerBootSerializer(soccer_boots, many=True).data
    return Response(serialized_soccer_boots)

@api_view(['POST'])
def add_boot_to_cart(request):
    cart_id = request.data.get('cart_id')
    print(request.data)
    product_id = request.data.get('product', {}).get('id')
    
    product = SoccerBoot.objects.get(id=product_id)    
    
    try:
        BootInCart.objects.create(cart_id=cart_id, product=product)
        return Response('Item adicionado com sucesso!', status=status.HTTP_201_CREATED)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_cart_products(request):
    pass

@api_view(['GET'])
def get_brands(request):
    brands = Brand.objects.all()
    serialized_brands = BrandSerializer(brands, many=True).data
    print(serialized_brands)
    return Response(serialized_brands)