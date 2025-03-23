from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Order(models.Model):
    pass

class Addres(models.Model):
    state = models.CharField(max_length=15)
    city = models.CharField(max_length=30)
    street = models.CharField(max_length=50)
    number = models.IntegerField()
    neighborhood = models.CharField(max_length=30)
    address_complement = models.CharField(max_length=6)
    cep = models.IntegerField()

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=20)
    address = models.ForeignKey(Addres, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to='avatars/')
    birth_date = models.DateField()
    orders = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
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
    
class Color(models.Model):
    color = models.CharField(max_length=10)
    color_code = models.CharField(max_length=7)

class Brand(models.Model):
    brand = models.CharField(max_length=10)

class BootType(models.Model):
    BOOT_TYPES = {
        'Campo':'Campo',
        'Salão':'Salão',
        'Suiço':'Suiço',
        'Trava Mista': 'Trava Mista',
    }
