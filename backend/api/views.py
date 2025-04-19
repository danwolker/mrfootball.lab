from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import NewsLetter, SoccerBoot, BootInCart, Brand, Color, BootInCart, Order, Address
from .serializer import NewsLetterSerializer, SoccerBootSerializer, BrandSerializer, ColorSerializer, BootInCartSerializer, QuestionSerializer

import mercadopago



@api_view(['POST'])
def register_new_question(request):
    data = request.data
    serializer = QuestionSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
    
    if request.GET.get('brand') and request.GET.get('brand') != 'Todas Marcas':
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
def get_filtered_boot(request):
    print(request)
    print(request.data)
    boot_id = request.GET.get('boot_id')
    boot = SoccerBoot.objects.get(id=boot_id)
    serialized_boot = SoccerBootSerializer(boot).data
    return Response(serialized_boot)
    
    

@api_view(['GET'])
def get_brands(request):
    brands = Brand.objects.all()
    serialized_brands = BrandSerializer(brands, many=True).data
    return Response(serialized_brands)

@api_view(['GET'])
def get_colors(request):
    colors = Color.objects.all()
    serialized_colors = ColorSerializer(colors, many=True).data
    return Response(serialized_colors)


@api_view(['POST'])
def add_boot_to_cart(request):
    product_id = request.data.get('product', {}).get('id')
    cart_id = request.data.get('cart_id')
    product_size = request.data.get('size')
    product = SoccerBoot.objects.get(id=product_id)    
    already_exists = BootInCart.objects.filter(cart_id=cart_id, product=product, size=product_size).first()
    if already_exists:
        already_exists.amount += 1
        already_exists.save()
        return Response('Quantidade de items modificada!', status=status.HTTP_200_OK)
        
    try:
        BootInCart.objects.create(cart_id=cart_id, product=product, size=product_size, amount=1)
        return Response('Item adicionado com sucesso!', status=status.HTTP_201_CREATED)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['PATCH'])
def increase_boot_amount_in_cart(request):
    cart_id = request.data.get('cart_id')
    product = request.data.get('boot_id')
    boot = BootInCart.objects.filter(cart_id=cart_id, product=product).first()
    boot.amount += 1
    boot.save()
    return Response('Quantidade de items aumentada!', status=status.HTTP_200_OK)
    
    
@api_view(['PATCH'])
def decrease_boot_amount_in_cart(request):
    cart_id = request.data.get('cart_id')
    product = request.data.get('boot_id')
    boot = BootInCart.objects.filter(cart_id=cart_id, product=product).first()
    if boot.amount >= 2:
        boot.amount -= 1
        boot.save()
        return Response('Quantidade de items subtraída!', status=status.HTTP_200_OK)
    else:
        return Response('Quantidade de itens no carrinho não pode ser menores que 1', status=status.HTTP_200_OK)
        
@api_view(['GET'])
def get_boots_in_cart(request):
    boot_in_chart = BootInCart.objects.all()
    serialized_boots_in_cart = BootInCartSerializer(boot_in_chart, many=True).data
    return Response(serialized_boots_in_cart)    





@api_view(['DELETE'])
def remove_boot_from_cart(request):
    cart_id = request.data.get('cart_id')
    product = request.data.get('boot_id')
    boot = BootInCart.objects.filter(cart_id=cart_id, product=product).first()
    boot.delete()
    return Response('Produto Excluído com sucesso!', status=status.HTTP_200_OK)




@api_view(['POST'])
def create_mercado_pago_preference(request):
    data = request.data
    boots = data.get('boots', [])
    
    #Validação dos dados
    for boot in boots:
        if boot['amount'] <= 0 or boot['product']['price'] <= 0:
            return Response({"error": "Dados inválidos"}, status=400)
   
    #Criar preferencia 
    sdk = mercadopago.SDK('TEST-5227787845718697-091413-0965163face555922a2cd71d78afa2f5-1982894105')
    preference_data = {
        "items": [
            {
                "title": boot['product']['brand'],
                "quantity": boot['amount'],
                "unit_price": float(boot['product']['price']),
            }
            for boot in boots
        ],
         
        "back_urls": {
            "success": "http://127.0.0.1:5173/catalog",
            "failure": "http://127.0.0.1:5173/",
            "pending": "http://127.0.0.1:5173/",
        },
        "auto_return": "approved",  
    }
    #Pegar resposta da preferência
    try:
        preference_response = sdk.preference().create(preference_data)
        
        
        if not isinstance(preference_response, dict) or 'response' not in preference_response:
            return Response(
                {"error": "Invalid response from Mercado Pago"},
                status=500
            )
        preference = preference_response['response']
       
        
        if 'id' not in preference:
            return Response(
                {"error": "Failed to create payment preference"},
                status=500
            )
        
        #Criando objeto Order para salvar dados do pedido e da preferência
        try:
            order = Order.objects.create(
                name=data.get('name'),
                last_name=data.get('last_name'),
                total_price=sum(boot['amount'] * boot['product']['price'] for boot in boots),
                status='PENDING',
                preference_id= preference['id']
            )
        except Exception as e:
            return Response({"error": str(e)}, status=400)
          
        return Response({
            "preference_id": preference['id'],
            "init_point": preference['init_point'],
            "sandbox_init_point": preference.get('sandbox_init_point', ''),
        })
        
    except Exception as e:
        order.delete()
        return Response(
            {"error": f"Error communicating with Mercado Pago: {str(e)}"},
            status=500
        )
        


@api_view(['POST'])
def finish_order(request):
    
    data = request.data
    for boot in data.get('boots', []):
        if boot['amount'] <= 0:
            return Response({"error": "Quantidade inválida"}, status=400)
        if boot['product']['price'] <= 0:
            return Response({"error": "Preço inválido"}, status=400)
    
    try:
        address = Address.objects.create(
            phone=data.get('phone'),
            state=data.get('state'),
            city=data.get('city'),
            street=data.get('street'),
            number=int(data.get('number')),
            neighborhood=data.get('neighborhood'),
            address_complement=data.get('complement', ''),
            cep=data.get('cep'),
            user=None,
        )
    except Exception as e:
        return Response({'error': f'Erro ao criar endereço: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
    
    total_price = sum(boot['amount'] * boot['product']['price']
        for boot in data.get('boots', [])
    )
    
    try:
        order = Order.objects.create(
            name=data.get('name'),
            last_name=data.get('last_name'),
            address=address,
            total_price=total_price 
        )
    
        for product_data in data.get('boots', []):
            product = product_data['product']
            pid = product.get('id')
            boot = SoccerBoot.objects.get(id=pid)
            order.boots.add(boot)
            cart_id = product_data['cart_id']
        boots_to_delete = BootInCart.objects.filter(cart_id=cart_id)
        boots_to_delete.delete()
        return Response({
            'success': True,
            'order_id': order.id,
            'total_price': total_price
        }, status=status.HTTP_201_CREATED)
        
        ### Adicionar preference_id
        ### Adicionar
        
        
    except Exception as e:
        address.delete()  
        return Response({'error': f'Erro ao criar pedido: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def registry_products(request):
    print(request.data)
    print(request.get.GET)
    return Response(status=status.HTTP_201_CREATED)
