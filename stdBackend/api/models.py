from django.db import models

# Create your models here.
class Customer(models.Model):
    birthDate=models.DateField(null=True, blank=True)
    gender=models.CharField(max_length=255)