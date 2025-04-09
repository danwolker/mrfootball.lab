from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import NewsLetter, SoccerBoot, BootInCart, Brand, Color, BootInCart
from .serializer import NewsLetterSerializer, SoccerBootSerializer, BrandSerializer, ColorSerializer, BootInCartSerializer

 
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
    filters = {} 
    if request.GET.get('color') and request.GET.get('color') != 'Todas':
        filters['color__color'] = request.GET.get('color')
    
    if request.GET.get('brand') and request.GET.get('brand') != 'Todas':
        filters['brand__brand'] = request.GET.get('brand')
      
    if request.GET.get('type') and request.GET.get('type') != 'Todas':
       filters['boot_type']= request.GET.get('type')
    
    if 'bootie' in request.GET:
        bootie_value = request.GET['bootie'].lower()
        if bootie_value == 'com':
            filters['bootie'] = True
        if bootie_value == 'sem':
            filters['bootie'] = False
        if bootie_value == 'todas':
            pass
            
            
    soccer_boots = SoccerBoot.objects.filter(**filters)
    serialized_soccer_boots = SoccerBootSerializer(soccer_boots, many=True).data
    return Response(serialized_soccer_boots)   

    
@api_view(['GET'])
def get_cart_products(request):
    pass

@api_view(['GET'])
def get_brands(request):
    brands = Brand.objects.all()
    serialized_soccer_boots = BrandSerializer(brands, many=True).data
    return Response(serialized_soccer_boots)

@api_view(['GET'])
def get_colors(request):
    colors = Color.objects.all()
    serialized_colors = ColorSerializer(colors, many=True).data
    return Response(serialized_colors)


@api_view(['PATCH'])
def update_boot_in_cart(request, cart_id):
    try:
        # Busca o item do carrinho pelo cart_id e product_id
        boot_in_cart = BootInCart.objects.get(cart_id=cart_id)
        
        # Atualiza apenas os campos enviados na requisição
        serializer = BootInCartSerializer(boot_in_cart, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    except BootInCart.DoesNotExist:
        return Response(
            {"error": "Item do carrinho não encontrado"},
            status=status.HTTP_404_NOT_FOUND
        )
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def add_boot_to_cart(request):
    product_id = request.data.get('product', {}).get('id')
    cart_id = request.data.get('cart_id')
    product = SoccerBoot.objects.get(id=product_id)    
    already_exists = BootInCart.objects.filter(cart_id=cart_id, product=product)
    if already_exists:
        print(already_exists)
        
    try:
        BootInCart.objects.create(cart_id=cart_id, product=product)
        return Response('Item adicionado com sucesso!', status=status.HTTP_201_CREATED)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['GET'])
def get_boots_in_cart(request):
    boot_in_chart = BootInCart.objects.all()
    serialized_boots_in_cart = BootInCartSerializer(boot_in_chart, many=True).data
    
    return Response(serialized_boots_in_cart)    

