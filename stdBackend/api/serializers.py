from asyncore import read
from dataclasses import field
from pyexpat import model
from statistics import mode
from wsgiref import validate
from rest_framework import serializers
from .models import Appointment, ContentMakerSlot, FoodCartItem, FoodItem, Party, PartyContentMaker, PartyContentMakerSlot, PartyDecorator, PartyThemeSlot, PartyVenue, PartyVenueSlot, Payment, Progress, Review, Catering, ContentMaker, Customer, Decorator, Entertainer, ServiceProvider, Theme, ThemeImage, Venue, ProviderImage, FoodImage, VenueSlot

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
        'images', 'themes', 'location', 'price']



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
        fields=['id', 'guestCount']

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


class UpdateFoodCartItemSerializer(serializers.ModelSerializer):
    fooditem_id=serializers.IntegerField()
    catering_id=serializers.IntegerField()
    class Meta:
        model=FoodCartItem
        fields=['id', 'quantity', 'fooditem_id', 'catering_id']

    def validate_fooditem_id(self, value):
        if not FoodItem.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No food item with the given ID was found.')
        return value

    def validate_catering_id(self, value):
        if not Catering.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No catering with the given ID was found.')
        return value



class FoodCartItemSerializer(serializers.ModelSerializer):
    totalPrice = serializers.SerializerMethodField()
    fooditem=FoodItemSerializer(many=False, read_only=True)
    catering=CateringSerializer(many=False, read_only=True)

    def get_totalPrice(self, cart_item: FoodCartItem):
        return cart_item.quantity * cart_item.fooditem.unitPrice

    class Meta:
        model=FoodCartItem
        fields=['id', 'fooditem', 'quantity', 'totalPrice', 'catering']



class AddFoodCartItemSerializer(serializers.ModelSerializer):
    fooditem_id=serializers.IntegerField()
    catering_id=serializers.IntegerField()

    def validate_fooditem_id(self, value):
        if not FoodItem.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No product with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        fooditem_id = self.validated_data['fooditem_id']
        quantity = self.validated_data['quantity']
        catering_id=self.validated_data['catering_id']

        try:
            cart_item = FoodCartItem.objects.get(
                party_id=party_id, fooditem_id=fooditem_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except FoodCartItem.DoesNotExist:
            self.instance = FoodCartItem.objects.create(
                party_id=party_id,
                catering_id=catering_id, **self.validated_data)

        return self.instance


    class Meta:
        model = FoodCartItem
        fields = ['id', 'fooditem_id', 'quantity', 'catering_id']


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


class UpdatePartyDecoratorSerializer(serializers.ModelSerializer):
    decorator_id=serializers.IntegerField()
    class Meta:
        model=PartyDecorator
        fields=['id', 'decorator_id']

    def validate_decorator_id(self, value):
        if not Decorator.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No decorator with the given ID was found.')
        return value


class AddPartyDecoratorSerializer(serializers.ModelSerializer):
    decorator_id=serializers.IntegerField()
    class Meta:
        model=PartyDecorator
        fields=['id', 'decorator_id']

    def validate_decorator_id(self, value):
        if not Decorator.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No decorator with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        self.instance = PartyDecorator.objects.create(
            party_id=party_id, **self.validated_data)

        return self.instance


class PartyDecoratorSerializer(serializers.ModelSerializer):
    decorator=DecoratorSerializer(many=False, read_only=True)

    class Meta:
        model=PartyDecorator
        fields=['id', 'decorator']



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


class UpdatePartyContentMakerSerializer(serializers.ModelSerializer):
    contentmaker_id=serializers.IntegerField()
    class Meta:
        model=PartyVenue
        fields=['id', 'contentmaker_id']

    def validate_contentmaker_id(self, value):
        if not ContentMaker.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No contentmaker  with the given ID was found.')
        return value


class AddPartyContentMakerSerializer(serializers.ModelSerializer):
    contentmaker_id=serializers.IntegerField()
    class Meta:
        model=PartyContentMaker
        fields=['id', 'contentmaker_id']

    def validate_contentmaker_id(self, value):
        if not ContentMaker.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No contentmaker  with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        self.instance = PartyContentMaker.objects.create(
            party_id=party_id, **self.validated_data)

        return self.instance


class PartyContentMakerSerializer(serializers.ModelSerializer):
    contentmaker=ContentMakerSerializer(many=False, read_only=True)
    price=serializers.SerializerMethodField()

    class Meta:
        model=PartyContentMaker
        fields=['id', 'contentmaker', 'price']

    def get_price(self, partycontentmaker):
        return partycontentmaker.contentmaker.price



class UpdatePartyVenueSerializer(serializers.ModelSerializer):
    venue_id=serializers.IntegerField()
    class Meta:
        model=PartyVenue
        fields=['id', 'venue_id']

    def validate_venue_id(self, value):
        if not Venue.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No venue with the given ID was found.')
        return value


class AddPartyVenueSerializer(serializers.ModelSerializer):
    venue_id=serializers.IntegerField()
    class Meta:
        model=PartyVenue
        fields=['id', 'venue_id']

    def validate_venue_id(self, value):
        if not Venue.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No venue with the given ID was found.')
        return value

    def save(self, **kwargs):
        party_id = self.context['party_id']
        self.instance = PartyVenue.objects.create(
            party_id=party_id, **self.validated_data)

        return self.instance


class PartyVenueSerializer(serializers.ModelSerializer):
    venue=VenueSerializer(many=False, read_only=True)
    class Meta:
        model=PartyVenue
        fields=['id', 'venue']



class PartySerializer(serializers.ModelSerializer):
    foodcartitem=FoodCartItemSerializer(many=True, read_only=True)
    partyvenue=PartyVenueSerializer(many=True, read_only=True)
    totalCost=serializers.SerializerMethodField()
    partydecorator=PartyDecoratorSerializer(many=True, read_only=True)
    partycontentmaker=PartyContentMakerSerializer(many=True, read_only=True)
    payedPrice=serializers.SerializerMethodField()
    pendingPrice=serializers.SerializerMethodField()
    status=serializers.SerializerMethodField()

    class Meta:
        model=Party
        fields=['id', 'totalCost', 'payedPrice', 'pendingPrice',
        'status', 'foodcartitem', 'partyvenue', 'partydecorator', 'partycontentmaker',
        'guestCount', 'locationLatitude',
        'locationLongitude']

    def get_payedPrice(self, party):
        return sum([payment.amount for payment in party.payment.all()])


    def get_totalCost(self, party):
        totalCost=(sum([partyvenue.venue.price  for partyvenue in party.partyvenue.all()])
        +sum([cartitem.fooditem.unitPrice*cartitem.quantity  for cartitem in party.foodcartitem.all()])
        +sum([partydecorator.decorator.price  for partydecorator in party.partydecorator.all()]) 
        +sum([partycontentmaker.contentmaker.price for partycontentmaker in party.partycontentmaker.all()])
        )
        
        Party.objects.filter(pk=party.id).update(totalCost=totalCost)
        return totalCost

    def get_pendingPrice(self, party):
        return max(0,(self.get_totalCost(party)-self.get_payedPrice(party)))

    def get_status(self, party):
        if self.get_totalCost(party)==0:
            return 'empty'
        elif(self.get_totalCost(party)<=self.get_payedPrice(party)):
            return 'confirmed'
        return 'pending'


class UpdatePartySerializer(serializers.ModelSerializer):
    class Meta:
        model=Party
        fields=['id', 'guestCount', 'locationLatitude', 'locationLongitude', 'totalCost']



class RecommendationInputSerializer(serializers.Serializer):
    budget=serializers.DecimalField(max_digits=11, decimal_places=2)
    guestCount=serializers.IntegerField()
    locationLatitude=serializers.DecimalField(max_digits=11, decimal_places=2)
    locationLongitude=serializers.DecimalField(max_digits=11, decimal_places=2)




class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Appointment
        fields=['id','ScheduledAt','status']

class CreateAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Appointment
        fields=['id','ScheduledAt']


    def save(self):
        serviceProvider_id=self.context['id']
        customer=Customer.objects.get(
            user_id=self.context['user_id']
        )
        appointment=Appointment.objects.create(
            customer=customer,
            serviceProvider_id=serviceProvider_id,
            ScheduledAt=self.validated_data['ScheduledAt'],
            )
        return appointment

class UpdateAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Appointment
        fields=['id', 'status']
        

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Payment
        fields=['id', 'paymentTime', 'amount']

class AddPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Payment
        fields=['id', 'amount']

    def save(self):
        party_id=self.context['party_id']
        customer=Customer.objects.get(
            user_id=self.context['user_id']
        )
        payment=Payment.objects.create(
            customer=customer, 
            party_id=party_id,
            amount=self.validated_data['amount']
            )
        return payment


class ServiceProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model=ServiceProvider
        fields=['id', 'title']


class ProgressSerializer(serializers.ModelSerializer):
    serviceProvider=ServiceProviderSerializer(read_only=True)
    class Meta:
        model=Progress
        fields=['id', 'description', 'serviceProvider']


class AddProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model=Progress
        fields=['id', 'description']

    def save(self):
        party_id=self.context['party_id']
        userType=self.context['user_type']
        if userType=='venue':
            provider=Venue.objects.get(
                user_id=self.context['user_id']
            )

        elif userType=='catering':
            provider=Catering.objects.get(
                user_id=self.context['user_id']
            )

        elif userType=='decorator':
            provider=Decorator.objects.get(
                user_id=self.context['user_id']
            )

        elif userType=='contentmaker':
            provider=ContentMaker.objects.get(
                user_id=self.context['user_id']
            )

        progress=Progress.objects.create(
            serviceProvider=provider, 
            party_id=party_id,
            description=self.validated_data['description']
            )
        return progress








