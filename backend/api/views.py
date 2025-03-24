from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import NewsLetter, SoccerBoot
from .serializer import NewsLetterSerializer, SoccerBootSerializer

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
    soccer_boots = SoccerBoot.objects.all()
    serialized_soccer_boots = SoccerBootSerializer(soccer_boots, many=True).data
    print(serialized_soccer_boots)
    return Response(serialized_soccer_boots)