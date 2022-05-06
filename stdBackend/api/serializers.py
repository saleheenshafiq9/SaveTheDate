from asyncore import read
from dataclasses import field
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from .models import Review, Catering, ContentMaker, Customer, Decorator, Entertainer, ServiceProvider, Venue

class CustomerSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)

    class Meta:
        model=Customer
        fields=['id', 'birthDate', 'user_id', 'gender']

class VenueSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Venue
        fields=['id', 'location', 'capacity', 'user_id', 'title', 'description']

class CateringSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Catering
        fields=['id', 'capacity', 'user_id', 'title', 'description']


class DecoratorSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Decorator
        fields=['id', 'user_id', 'title', 'description']

class ContentMakerSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=ContentMaker
        fields=['id', 'user_id', 'title', 'description']


class EntertainerSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Entertainer
        fields=['id', 'user_id', 'title', 'description']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=['id', 'postedAt', 'name', 'description', 'customer',
                'serviceProvider_id']

class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=['id', 'name', 'description']

    def save(self):
        serviceProvider_id=self.context['id']
        customer=Customer.objects.get(
            user_id=self.context['user_id']
        )
        review=Review.objects.create(
            customer=customer,
            serviceProvider_id=serviceProvider_id,
            name=self.validated_data['name'],
            description=self.validated_data['description']
            )
        return review
    
    
