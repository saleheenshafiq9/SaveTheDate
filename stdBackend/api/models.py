from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

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
    rating=models.DecimalField(
        max_digits=3,
        decimal_places=2,
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        null=True,
    )



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
    catering=models.ManyToManyField(Catering)
    totalCost=models.DecimalField(
        max_digits=11,
        decimal_places=2,
        default=0,
    )
    pendingCost=models.DecimalField(
        max_digits=11,
        decimal_places=2,
        default=0,
    )
    status=models.CharField(max_length=255, default="unconfirmed")




class Notification(models.Model):
    notifiedAt=models.DateTimeField(auto_now=True)
    mobileNumber=models.CharField(max_length=255)
    description=models.TextField()


class Payment(models.Model):
    paymentTime=models.DateTimeField(auto_now=True)
    customer=models.ForeignKey(Customer, on_delete=models.PROTECT)
    amount=models.DecimalField(
        max_digits=11,
        decimal_places=2,
    )
    party=models.ForeignKey(
        Party, on_delete=models.CASCADE)
    

class Review(models.Model):
    serviceProvider=models.ForeignKey(ServiceProvider, on_delete=models.CASCADE, related_name='reviews')
    name=models.CharField(max_length=255)
    description=models.TextField()
    postedAt=models.DateTimeField(auto_now_add=True)
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE)

class ProviderImage(models.Model):
    serviceProvider = models.ForeignKey(
        ServiceProvider, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(
        upload_to='api/images')


class FoodItem(models.Model):
    catering=models.ForeignKey(Catering, on_delete=models.CASCADE, related_name='items')
    title=models.CharField(max_length=255)
    description=models.TextField()
    unitPrice=models.DecimalField(
        max_digits=11,
        decimal_places=2,
    )

class FoodImage(models.Model):
    fooditem=models.ForeignKey(FoodItem, on_delete=models.CASCADE, related_name='images')
    image=models.ImageField(
        upload_to='api/foodimage'
    )

class Theme(models.Model):
    decorator=models.ForeignKey(Decorator, on_delete=models.CASCADE, related_name='themes')
    title=models.CharField(max_length=255)
    description=models.TextField()
    price=models.DecimalField(
        max_digits=11,
        decimal_places=2,
    )

class ThemeImage(models.Model):
    theme=models.ForeignKey(Theme, on_delete=models.CASCADE, related_name='images')
    image=models.ImageField(
        upload_to='api/themeimage'
    )



class FoodCartItem(models.Model):
    party=models.ForeignKey(
        Party, on_delete=models.CASCADE,
        related_name='foodcartitem'
    )

    fooditem=models.ForeignKey(
        FoodItem, 
        on_delete=models.CASCADE, 
        )

    quantity=models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1)]
    )


class VenueSlot(models.Model):
    venue=models.ForeignKey(Venue, on_delete=models.CASCADE)
    startTime=models.DateTimeField()
    endTime=models.DateTimeField()
    price=models.DecimalField(
        max_digits=11,
        decimal_places=2,
        default=0,
    )

class PartyVenueSlot(models.Model):
    party=models.ForeignKey(Party, on_delete=models.CASCADE, related_name='partyvenueslot')
    venueslot=models.ForeignKey(VenueSlot, on_delete=models.CASCADE, null=True, related_name='partyvenueslot')



