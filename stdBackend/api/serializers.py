from pyexpat import model
from rest_framework import serializers
from .models import Review, Catering, ContentMaker, Customer, Decorator, Entertainer, Venue

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


class ReviewSerailizer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=['id', 'date', 'name', 'description']

    def create(self, validated_data):
        serviceprovider_id=self.context['serviceProvider_id']
        return Review.objects.create(serviceProvider_id=serviceprovider_id, **validated_data)


