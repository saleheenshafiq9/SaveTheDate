from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    email=models.EmailField(unique=True)
    phoneNumber=models.CharField(max_length=14)
    userType=models.CharField(max_length=255)