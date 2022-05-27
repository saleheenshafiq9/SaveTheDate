from asyncore import read
from dataclasses import field
from pyexpat import model
from statistics import mode
from wsgiref import validate
from rest_framework import serializers
from .models import FoodCart, FoodCartItem, FoodItem, Party, Review, Catering, ContentMaker, Customer, Decorator, Entertainer, ServiceProvider, Theme, ThemeImage, Venue, ProviderImage, FoodImage

class CustomerSerializer(serializers.ModelSerializer):
    user_id=serializers.IntegerField(read_only=True)

    class Meta:
        model=Customer
        fields=['id', 'birthDate', 'user_id', 'gender']


class ProviderImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        serviceProvider_id = self.context['serviceProvider_id']
        return ProviderImage.objects.create(serviceProvider_id=serviceProvider_id, **validated_data)

    class Meta:
        model = ProviderImage
        fields = ['id', 'image']



class VenueSerializer(serializers.ModelSerializer):
    images=ProviderImageSerializer(many=True, read_only=True)
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Venue
        fields=['id', 'location', 'capacity', 'user_id', 
        'title', 'description', 'images']


class FoodImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        fooditem_id = self.context['item_id']
        return FoodImage.objects.create(fooditem_id=fooditem_id, **validated_data)

    class Meta:
        model = FoodImage
        fields = ['id', 'image']



class FoodItemSerializer(serializers.ModelSerializer):
    images=FoodImageSerializer(many=True, read_only=True)
    class Meta:
        model=FoodItem
        fields=['id', 'title',
        'description', 'unitPrice', 'images', 'catering_id']

    def create(self, validated_data):
        catering_id=self.context['catering_id']
        return FoodItem.objects.create(
            catering_id=catering_id,
            **validated_data
        )


class CateringSerializer(serializers.ModelSerializer):
    images=ProviderImageSerializer(many=True, read_only=True)
    user_id=serializers.IntegerField(read_only=True)
    items=FoodItemSerializer(many=True, read_only=True)
    class Meta:
        model=Catering
        fields=['id', 'capacity', 'user_id', 'title', 
        'description', 'images', 'items']


class ThemeImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        theme_id = self.context['theme_id']
        return ThemeImage.objects.create(theme_id=theme_id, **validated_data)

    class Meta:
        model = ThemeImage
        fields = ['id', 'image']



class ThemeSerializer(serializers.ModelSerializer):
    images=ThemeImageSerializer(many=True, read_only=True)
    class Meta:
        model=Theme
        fields=['id', 'title',
        'description', 'price', 'images']

    def create(self, validated_data):
        decorator_id=self.context['decorator_id']
        return Theme.objects.create(
            decorator_id=decorator_id,
            **validated_data
        )


class DecoratorSerializer(serializers.ModelSerializer):
    images=ProviderImageSerializer(many=True, read_only=True)
    user_id=serializers.IntegerField(read_only=True)
    themes=ThemeSerializer(many=True, read_only=True)
    class Meta:
        model=Decorator
        fields=['id', 'user_id', 'title', 'description',
        'images', 'themes']



class ContentMakerSerializer(serializers.ModelSerializer):
    images=ProviderImageSerializer(many=True, read_only=True)
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=ContentMaker
        fields=['id', 'user_id', 'title', 'description', 'images']


class EntertainerSerializer(serializers.ModelSerializer):
    images=ProviderImageSerializer(many=True, read_only=True)
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Entertainer
        fields=['id', 'user_id', 'title', 'description',
        'images']


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

class PartySerializer(serializers.ModelSerializer):
    class Meta:
        model=Party
        fields=['id', 'totalCost', 'pendingCost',
        'status']


class CreatePartySerializer(serializers.ModelSerializer):
    class Meta:
        model=Party
        fields=['id']

    def save(self):
        customer=Customer.objects.get(
            user_id=self.context['user_id']
        )
        party=Party.objects.create(
            customer=customer
        )
        return party

class AddPartyCateringSerializer(serializers.ModelSerializer):
    class Meta:
        model=Catering
        fields=['id']


class FoodCartItemSerializer(serializers.ModelSerializer):
    totalPrice = serializers.SerializerMethodField()

    def get_totalPrice(self, cart_item: FoodCartItem):
        return cart_item.quantity * cart_item.fooditem.unitPrice

    class Meta:
        model=FoodCartItem
        fields=['id', 'fooditem', 'quantity', 'totalPrice']


class PartyFoodCartSerializer(serializers.ModelSerializer):
    foodcartitem=FoodCartItemSerializer(many=True, read_only=True)
    
    class Meta:
        model=FoodCart
        fields=['id', 'party_id', 'foodcartitem']


class AddFoodCartItemSerializer(serializers.ModelSerializer):
    fooditem_id=serializers.IntegerField()

    def validate_fooditem_id(self, value):
        if not FoodItem.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No product with the given ID was found.')
        return value

    def save(self, **kwargs):
        foodcart_id = self.context['foodcart_id']
        fooditem_id = self.validated_data['fooditem_id']
        quantity = self.validated_data['quantity']

        try:
            cart_item = FoodCartItem.objects.get(
                foodcart_id=foodcart_id, fooditem_id=fooditem_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except FoodCartItem.DoesNotExist:
            self.instance = FoodCartItem.objects.create(
                foodcart_id=foodcart_id, **self.validated_data)

        return self.instance


    class Meta:
        model = FoodCartItem
        fields = ['id', 'fooditem_id', 'quantity']
