from django.contrib import admin
from .models import Profile,Address,Brand,Color,NewsLetter,SoccerBoot,Line,BootInCart
# Register your models here.
admin.site.register(Profile)
admin.site.register(Address)
admin.site.register(Brand)
admin.site.register(Color)
admin.site.register(NewsLetter)
admin.site.register(SoccerBoot)
admin.site.register(Line)
admin.site.register(BootInCart)