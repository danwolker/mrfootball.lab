from rest_framework import serializers
from .models import NewsLetter, SoccerBoot, BootInCart, Brand, Color

class NewsLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = '__all__'


class SoccerBootSerializer(serializers.ModelSerializer):
    brand = serializers.SlugRelatedField(slug_field='brand', read_only=True)
    line = serializers.SlugRelatedField(slug_field='line', read_only=True)
    color = serializers.SlugRelatedField(slug_field='color', read_only=True)
    
    class Meta:
        model = SoccerBoot
        fields = ['id','brand', 'line', 'color', 'price', 'rating', 'image']
        def to_representation(self, instance):
            representation = super().to__representation(instance)
            if instance.image:
                representation['image'] = instance.image.url
                print(representation['image'])
            return representation

class BookInChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootInCart
        fields = '__all__'
        
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['brand']
        
class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['color']