from pyexpat import model
from django.db import models
from django.conf import settings

# Create your models here.
class Customer(models.Model):
    birthDate=models.DateField(null=True, blank=True)
    gender=models.CharField(max_length=255)
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

class ServiceProvider(models.Model):
    description=models.TextField(null=True, blank=True)
    user=models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )


class Venue(ServiceProvider):
    pass

class Catering(ServiceProvider):
    pass

class Decorator(ServiceProvider):
    pass

class ContentMaker(ServiceProvider):
    pass

class Entertainer(ServiceProvider):
    pass

class Appointment(models.Model):
    Category=models.CharField(max_length=255)
    ScheduledAt=models.DateTimeField()

class Party(models.Model):
    pass

class Notification(models.Model):
    notifiedAt=models.DateTimeField()
    mobileNumber=models.CharField(max_length=255)
    