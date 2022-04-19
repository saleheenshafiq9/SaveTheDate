from django.contrib import admin
from .import models
    

# Register your models here.
@admin.register(models.Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass

@admin.register(models.Venue)
class VenueAdmin(admin.ModelAdmin):
    pass

@admin.register(models.Catering)
class CateringAdmin(admin.ModelAdmin):
    pass

@admin.register(models.Decorator)
class DecoratorAdmin(admin.ModelAdmin):
    pass


@admin.register(models.ContentMaker)
class ContentMakerAdmin(admin.ModelAdmin):
    pass

@admin.register(models.Entertainer)
class EntertainerAdmin(admin.ModelAdmin):
    pass
