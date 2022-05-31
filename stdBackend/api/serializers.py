from asyncore import read
from dataclasses import field
from pyexpat import model
from statistics import mode
from wsgiref import validate
from rest_framework import serializers
from .models import FoodCartItem, FoodItem, Party, PartyVenueSlot, Review, Catering, ContentMaker, Customer, Decorator, Entertainer, ServiceProvider, Theme, ThemeImage, Venue, ProviderImage, FoodImage, VenueSlot

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
    fooditem=FoodItemSerializer(many=False, read_only=True)

    def get_totalPrice(self, cart_item: FoodCartItem):
        return cart_item.quantity * cart_item.fooditem.unitPrice

    class Meta:
        model=FoodCartItem
        fields=['id', 'fooditem', 'quantity', 'totalPrice']



class AddFoodCartItemSerializer(serializers.ModelSerializer):
    fooditem_id=serializers.IntegerField()

    def validate_fooditem_id(self, value):
        if not FoodItem.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No product with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        fooditem_id = self.validated_data['fooditem_id']
        quantity = self.validated_data['quantity']

        try:
            cart_item = FoodCartItem.objects.get(
                party_id=party_id, fooditem_id=fooditem_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except FoodCartItem.DoesNotExist:
            self.instance = FoodCartItem.objects.create(
                party_id=party_id, **self.validated_data)

        return self.instance


    class Meta:
        model = FoodCartItem
        fields = ['id', 'fooditem_id', 'quantity']


class VenueSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=VenueSlot
        fields=['id', 'startTime', 'endTime', 'price']

class CreateVenueSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=VenueSlot
        fields=['id', 'startTime', 'endTime', 'price']
        
    
    def save(self):
        venue_id=self.context['id']
        venueslot=VenueSlot.objects.create(
            venue_id=venue_id,
            startTime=self.validated_data['startTime'],
            endTime=self.validated_data['endTime'],
            price=self.validated_data['price']
            )
        return venueslot

class UpdatePartyVenueSlotSerializer(serializers.ModelSerializer):
    venueslot_id=serializers.IntegerField()
    class Meta:
        model=PartyVenueSlot
        fields=['id', 'venueslot_id']

    def validate_venueslot_id(self, value):
        if not VenueSlot.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No venue slot with the given ID was found.')
        return value


class AddPartyVenueSlotSerializer(serializers.ModelSerializer):
    venueslot_id=serializers.IntegerField()
    class Meta:
        model=PartyVenueSlot
        fields=['id', 'venueslot_id']

    def validate_venueslot_id(self, value):
        if not VenueSlot.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No venue slot with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        self.instance = PartyVenueSlot.objects.create(
            party_id=party_id, **self.validated_data)

        return self.instance


class PartyVenueSlotSerializer(serializers.ModelSerializer):
    venueslot=VenueSlotSerializer(many=False, read_only=True)
    price=serializers.SerializerMethodField()

    class Meta:
        model=PartyVenueSlot
        fields=['id', 'venueslot', 'price']

    def get_price(self, partyvenueslot):
        return partyvenueslot.venueslot.price


class PartySerializer(serializers.ModelSerializer):
    foodcartitem=FoodCartItemSerializer(many=True, read_only=True)
    partyvenueslot=PartyVenueSlotSerializer(many=True, read_only=True)
    totalCost=serializers.SerializerMethodField()

    class Meta:
        model=Party
        fields=['id', 'totalCost', 'pendingCost',
        'status', 'foodcartitem', 'partyvenueslot']

    def get_totalCost(self, party):
        try:
            return (sum([partyvenueslot.venueslot.price  for partyvenueslot in party.partyvenueslot.all()])+sum([cartitem.fooditem.unitPrice*cartitem.quantity  for cartitem in party.foodcartitem.all()]) )
        except AttributeError:
            return 0
        



