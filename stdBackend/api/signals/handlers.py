from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from api.models import Customer,Venue, Catering, Decorator, ContentMaker, Entertainer

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_customer_for_new_user(sender, **kwargs):
    if kwargs['created']:
        user=kwargs['instance']
        if(user.userType=='customer'):
            Customer.objects.create(user=kwargs['instance'])
        elif(user.userType=='venue'):
            Venue.objects.create(user=kwargs['instance'])
        elif(user.userType=='catering'):
            Catering.objects.create(user=kwargs['instance'])
        elif(user.userType=='decorator'):
            Decorator.objects.create(user=kwargs['instance'])
        elif(user.userType=='contentmaker'):
            ContentMaker.objects.create(user=kwargs['instance'])
        elif(user.userType=='entertainer'):
            Entertainer.objects.create(user=kwargs['instance'])