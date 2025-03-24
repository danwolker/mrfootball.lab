from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=20)
    image = models.ImageField(upload_to='avatars/')
    birth_date = models.DateField()
    cpf = models.IntegerField()

    @property
    def name(self):
        if self.display_name:
            return self.display_name
        return self.user.username
    
    @property
    def avatar(self):
        if self.image:
            return self.image.url
        return f'{settings.STATIC_URL}images/avatar.svg'
    
    def __str__(self):
        return self.name

class Addres(models.Model):
    state = models.CharField(max_length=15)
    city = models.CharField(max_length=30)
    street = models.CharField(max_length=50)
    number = models.IntegerField()
    neighborhood = models.CharField(max_length=30)
    address_complement = models.CharField(max_length=6)
    cep = models.IntegerField()
    user = models.ForeignKey(Profile, related_name='user_address' ,on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.user

class Color(models.Model):
    color = models.CharField(max_length=10)
    color_code = models.CharField(max_length=7)

    def __str__(self):
        return self.color

class Brand(models.Model):
    brand = models.CharField(max_length=10)

    def __str__(self):
        return self.brand

class BootType(models.Model):
    BOOT_TYPES = {
        'Campo':'Campo',
        'Salão':'Salão',
        'Suiço':'Suiço',
        'Trava Mista': 'Trava Mista',
    }
    boot_type = models.CharField(max_length=11, choices=BOOT_TYPES)
    
    def __str__(self):
        return self.boot_type

class NewsLetter(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    wpp = models.CharField(max_length=11)

    def __str__(self):
        return f'{self.name} | {self.email} | {self.wpp}'
    
class Order(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    addres = models.ForeignKey(Addres, on_delete=models.SET_NULL, null=True)
    chuteira = models.ForeignKey(BootType, on_delete=models.SET_NULL, null=True)