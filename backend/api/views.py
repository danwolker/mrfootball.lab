from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import NewsLetter
from .serializer import NewsLetterSerializer

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