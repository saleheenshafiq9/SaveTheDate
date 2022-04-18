from pyexpat import model
from unicodedata import category
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator

# Create your models here.
class Customer(models.Model):
    birthDate=models.DateField(null=True, blank=True)
    gender=models.CharField(max_length=255)
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

class ServiceProvider(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField(null=True, blank=True)



class Venue(ServiceProvider):
    location=models.CharField(max_length=255)
    capacity=models.IntegerField(default=0,validators=[MinValueValidator(0)])
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

    
class Catering(ServiceProvider):
    capacity=models.IntegerField(default=0, validators=[MinValueValidator(0)])
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

class Decorator(ServiceProvider):
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

class ContentMaker(ServiceProvider):
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

class Entertainer(ServiceProvider):
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

class Appointment(models.Model):
    Category=models.CharField(max_length=255)
    ScheduledAt=models.DateTimeField()
    customer=models.ForeignKey(Customer, on_delete=models.PROTECT)
    serviceProvider=models.ManyToManyField(ServiceProvider)


class Party(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.PROTECT)
    serviceProviders=models.ManyToManyField(ServiceProvider)


class Notification(models.Model):
    notifiedAt=models.DateTimeField(auto_now=True)
    mobileNumber=models.CharField(max_length=255)
    description=models.TextField()

class Payment(models.Model):
    category=models.CharField(max_length=255)
    paymentTime=models.DateTimeField()
    customer=models.ForeignKey(Customer, on_delete=models.PROTECT)
    serviceProvider=models.ManyToManyField(ServiceProvider)
    amount=models.DecimalField(
        max_digits=11,
        decimal_places=2,
    )
    vatAmount=models.DecimalField(
        max_digits=11,
        decimal_places=2,
    )
    

class Review(models.Model):
    serviceProvider=models.ForeignKey(ServiceProvider, on_delete=models.CASCADE, related_name='reviews')
    name=models.CharField(max_length=255)
    description=models.TextField()
    date=models.DateField(auto_now_add=True)