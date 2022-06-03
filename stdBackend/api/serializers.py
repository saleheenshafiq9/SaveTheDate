from asyncore import read
from dataclasses import field
from pyexpat import model
from statistics import mode
from wsgiref import validate
from rest_framework import serializers
from .models import ContentMakerSlot, FoodCartItem, FoodItem, Party, PartyContentMakerSlot, PartyThemeSlot, PartyVenueSlot, Review, Catering, ContentMaker, Customer, Decorator, Entertainer, ServiceProvider, Theme, ThemeImage, Venue, ProviderImage, FoodImage, VenueSlot

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
        'title', 'description', 'images', 'price']


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
        'description', 'images', 'items', 'location']


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
        'images', 'themes', 'location']



class ContentMakerSerializer(serializers.ModelSerializer):
    images=ProviderImageSerializer(many=True, read_only=True)
    user_id=serializers.IntegerField(read_only=True)
    class Meta:
        model=ContentMaker
        fields=['id', 'user_id', 'title', 'description', 'images', 'price', 'location']


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


class UpdatePartyThemeSlotSerializer(serializers.ModelSerializer):
    theme_id=serializers.IntegerField()
    class Meta:
        model=PartyThemeSlot
        fields=['id', 'theme_id']

    def validate_theme_id(self, value):
        if not Theme.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No theme with the given ID was found.')
        return value


class AddPartyThemeSlotSerializer(serializers.ModelSerializer):
    theme_id=serializers.IntegerField()
    class Meta:
        model=PartyThemeSlot
        fields=['id', 'theme_id']

    def validate_theme_id(self, value):
        if not Theme.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No theme with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        self.instance = PartyThemeSlot.objects.create(
            party_id=party_id, **self.validated_data)

        return self.instance


class PartyThemeSlotSerializer(serializers.ModelSerializer):
    theme=ThemeSerializer(many=False, read_only=True)
    price=serializers.SerializerMethodField()

    class Meta:
        model=PartyThemeSlot
        fields=['id', 'theme', 'price']

    def get_price(self, partythemeslot):
        return partythemeslot.theme.price


class ContentMakerSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContentMakerSlot
        fields=['id', 'startTime', 'endTime', 'price']



class CreateContentMakerSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContentMakerSlot
        fields=['id', 'startTime', 'endTime', 'price']
        
    
    def save(self):
        contentmaker_id=self.context['id']
        contentmakerslot=ContentMakerSlot.objects.create(
            contentmaker_id=contentmaker_id,
            startTime=self.validated_data['startTime'],
            endTime=self.validated_data['endTime'],
            price=self.validated_data['price']
            )
        return contentmakerslot

class UpdatePartyContentMakerSlotSerializer(serializers.ModelSerializer):
    contentmakerslot_id=serializers.IntegerField()
    class Meta:
        model=PartyVenueSlot
        fields=['id', 'contentmakerslot_id']

    def validate_contentmakerslot_id(self, value):
        if not ContentMakerSlot.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No contentmaker slot with the given ID was found.')
        return value


class AddPartyContentMakerSlotSerializer(serializers.ModelSerializer):
    contentmakerslot_id=serializers.IntegerField()
    class Meta:
        model=PartyContentMakerSlot
        fields=['id', 'contentmakerslot_id']

    def validate_contentmakerslot_id(self, value):
        if not ContentMakerSlot.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No contentmaker slot with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        self.instance = PartyContentMakerSlot.objects.create(
            party_id=party_id, **self.validated_data)

        return self.instance


class PartyContentMakerSlotSerializer(serializers.ModelSerializer):
    contentmakekrslot=ContentMakerSlotSerializer(many=False, read_only=True)
    price=serializers.SerializerMethodField()

    class Meta:
        model=PartyContentMakerSlot
        fields=['id', 'contentmakekrslot', 'price']

    def get_price(self, partycontentmakerslot):
        return partycontentmakerslot.contentmakerslot.price



class PartySerializer(serializers.ModelSerializer):
    foodcartitem=FoodCartItemSerializer(many=True, read_only=True)
    partyvenueslot=PartyVenueSlotSerializer(many=True, read_only=True)
    totalCost=serializers.SerializerMethodField()
    partythemeslot=PartyThemeSlotSerializer(many=True, read_only=True)
    partycontentmakerslot=PartyContentMakerSlotSerializer(many=True, read_only=True)

    class Meta:
        model=Party
        fields=['id', 'totalCost',
        'status', 'foodcartitem', 'partyvenueslot', 'partythemeslot', 'partycontentmakerslot',
        'guestCount', 'locationLatitude',
        'locationLongitude']

    def get_totalCost(self, party):
        try:
            totalCost=(sum([partyvenueslot.venueslot.price  for partyvenueslot in party.partyvenueslot.all()])
            +sum([cartitem.fooditem.unitPrice*cartitem.quantity  for cartitem in party.foodcartitem.all()])
            +sum([partythemeslot.theme.price  for partythemeslot in party.partythemeslot.all()]) )
            return totalCost
        except AttributeError:
            return 0


class UpdatePartySerializer(serializers.ModelSerializer):
    class Meta:
        model=Party
        fields=['id', 'guestCount', 'locationLatitude', 'locationLongitude', 'totalCost']



class RecommendationInputSerializer(serializers.Serializer):
    budget=serializers.DecimalField(max_digits=11, decimal_places=2)
    guestCount=serializers.IntegerField()
    locationLatitude=serializers.DecimalField(max_digits=11, decimal_places=2)
    locationLongitude=serializers.DecimalField(max_digits=11, decimal_places=2)


