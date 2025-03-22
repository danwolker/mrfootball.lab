from django.contrib import admin
from .models import Profile,Addres,BootType,Brand,Color,Order
# Register your models here.
admin.site.register(Profile)
admin.site.register(Addres)
admin.site.register(BootType)
admin.site.register(Brand)
admin.site.register(Color)
admin.site.register(Order)