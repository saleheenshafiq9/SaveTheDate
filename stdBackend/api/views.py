from cmath import sqrt
import queue
from decimal import Decimal
import django
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .permissions import DenyAll, IsCateringOrReadOnly, IsCustomerOrReadOnly, IsDecoratorOrReadOnly
from .models import Appointment, ContentMakerSlot, FoodCartItem, Party, PartyContentMaker, PartyContentMakerSlot, PartyDecorator, PartyThemeSlot, PartyVenue, PartyVenueSlot, Payment, Progress, ServiceProvider, Theme, Review, Catering, ContentMaker, Customer, Decorator, Entertainer, Venue, ProviderImage, FoodImage, ThemeImage, FoodItem, VenueSlot
from .serializers import AddDummyParty, AddPartyContentMakerSerializer, AddPartyDecoratorSerializer, AddPartyVenueSerializer, AddPartyVenueSlotSerializer, AddPaymentSerializer, AddProgressSerializer, AppointmentSerializer, ContentMakerSlotSerializer, CreateAppointmentSerializer, CreateContentMakerSlotSerializer, PartyContentMakerSerializer,  PartyDecoratorSerializer, PartyVenueSerializer, PartyVenueSlotSerializer, AddFoodCartItemSerializer, AddPartyCateringSerializer, CateringSerializer, ContentMakerSerializer, CreatePartySerializer, CreateReviewSerializer, CreateVenueSlotSerializer, DecoratorSerializer, EntertainerSerializer, FoodCartItemSerializer, FoodItemSerializer, PartySerializer, PaymentSerializer, ProgressSerializer, RecommendationInputSerializer, ReviewSerializer, CustomerSerializer, UpdateAppointmentSerializer, UpdateFoodCartItemSerializer, UpdatePartyContentMakerSerializer,  UpdatePartyDecoratorSerializer, UpdatePartySerializer, UpdatePartyVenueSerializer, UpdatePartyVenueSlotSerializer, VenueSerializer, ProviderImageSerializer, FoodImageSerializer, ThemeSerializer, ThemeImageSerializer, VenueSlotSerializer
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework import status
from django.http import JsonResponse


# Create your views here.
class CustomerViewSet(ModelViewSet): 
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        customer=Customer.objects.get(
            user_id=request.user.id)
        if request.method=='GET':
            serializer=CustomerSerializer(customer)
            return Response(serializer.data)
        elif request.method=='PUT':
            serializer=CustomerSerializer(customer, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

class VenueViewSet(ModelViewSet): 
    queryset=Venue.objects.all()
    serializer_class=VenueSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        venue=Venue.objects.get(
            user_id=request.user.id)
        if request.method=='GET':
            serializer=VenueSerializer(venue)
            return Response(serializer.data)
        elif request.method=='PUT':
            serializer=VenueSerializer(venue, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

class CateringViewSet(ModelViewSet): 
    queryset=Catering.objects.all()
    serializer_class=CateringSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        catering=Catering.objects.get(
            user_id=request.user.id)
        if request.method=='GET':
            serializer=CateringSerializer(catering)
            return Response(serializer.data)
        elif request.method=='PUT':
            serializer=CateringSerializer(catering, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class DecoratorViewSet(ModelViewSet): 
    queryset=Decorator.objects.all()
    serializer_class=DecoratorSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        decorator=Decorator.objects.get(
            user_id=request.user.id)
        if request.method=='GET':
            serializer=DecoratorSerializer(decorator)
            return Response(serializer.data)
        elif request.method=='PUT':
            serializer=DecoratorSerializer(decorator, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

class ContentMakerViewSet(ModelViewSet): 
    queryset=ContentMaker.objects.all()
    serializer_class=ContentMakerSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        contentmaker=ContentMaker.objects.get(
            user_id=request.user.id)
        if request.method=='GET':
            serializer=ContentMakerSerializer(contentmaker)
            return Response(serializer.data)
        elif request.method=='PUT':
            serializer=ContentMakerSerializer(contentmaker, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class EntertainerViewSet(ModelViewSet): 
    queryset=Entertainer.objects.all()
    serializer_class=EntertainerSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        entertainer=Entertainer.objects.get(
            user_id=request.user.id)
        if request.method=='GET':
            serializer=EntertainerSerializer(entertainer)
            return Response(serializer.data)
        elif request.method=='PUT':
            serializer=EntertainerSerializer(entertainer, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)



class ReviewVenueViewSet(ModelViewSet):
    permission_classes=[IsCustomerOrReadOnly]
    def get_queryset(self):
        return Review.objects.filter(serviceProvider_id=self.kwargs['venue_pk'])
    

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateReviewSerializer
        return ReviewSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateReviewSerializer(
            data=request.data,
            context={
                'user_id':self.request.user.id,
                'id':self.kwargs['venue_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        review=serializer.save()
        serializer=ReviewSerializer(review)
        return Response(serializer.data)


class ReviewCateringViewSet(ModelViewSet):
    permission_classes=[IsCustomerOrReadOnly]
    def get_queryset(self):
        return Review.objects.filter(serviceProvider_id=self.kwargs['catering_pk'])
    

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateReviewSerializer
        return ReviewSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateReviewSerializer(
            data=request.data,
            context={
                'user_id':self.request.user.id,
                'id':self.kwargs['catering_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        review=serializer.save()
        serializer=ReviewSerializer(review)
        return Response(serializer.data)


class ReviewDecoratorViewSet(ModelViewSet):
    permission_classes=[IsCustomerOrReadOnly]
    def get_queryset(self):
        return Review.objects.filter(serviceProvider_id=self.kwargs['decorator_pk'])
    

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateReviewSerializer
        return ReviewSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateReviewSerializer(
            data=request.data,
            context={
                'user_id':self.request.user.id,
                'id':self.kwargs['decorator_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        review=serializer.save()
        serializer=ReviewSerializer(review)
        return Response(serializer.data)


class ReviewContentMakerViewSet(ModelViewSet):
    permission_classes=[IsCustomerOrReadOnly]
    def get_queryset(self):
        return Review.objects.filter(serviceProvider_id=self.kwargs['contentmaker_pk'])
    

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateReviewSerializer
        return ReviewSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateReviewSerializer(
            data=request.data,
            context={
                'user_id':self.request.user.id,
                'id':self.kwargs['contentmaker_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        review=serializer.save()
        serializer=ReviewSerializer(review)
        return Response(serializer.data)


class ReviewEntertainerViewSet(ModelViewSet):
    permission_classes=[IsCustomerOrReadOnly]
    def get_queryset(self):
        return Review.objects.filter(id=self.kwargs['entertainer_pk'])
    

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateReviewSerializer
        return ReviewSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateReviewSerializer(
            data=request.data,
            context={
                'user_id':self.request.user.id,
                'id':self.kwargs['entertainer_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        review=serializer.save()
        serializer=ReviewSerializer(review)
        return Response(serializer.data)

class VenueImageViewSet(ModelViewSet):
    serializer_class = ProviderImageSerializer

    def get_serializer_context(self):
        return {'serviceProvider_id': self.kwargs['venue_pk']}

    def get_queryset(self):
        return ProviderImage.objects.filter(serviceProvider_id=self.kwargs['venue_pk'])


class CateringImageViewSet(ModelViewSet):
    serializer_class = ProviderImageSerializer

    def get_serializer_context(self):
        return {'serviceProvider_id': self.kwargs['catering_pk']}

    def get_queryset(self):
        return ProviderImage.objects.filter(serviceProvider_id=self.kwargs['catering_pk'])


class DecoratorImageViewSet(ModelViewSet):
    serializer_class = ProviderImageSerializer

    def get_serializer_context(self):
        return {'serviceProvider_id': self.kwargs['decorator_pk']}

    def get_queryset(self):
        return ProviderImage.objects.filter(serviceProvider_id=self.kwargs['decorator_pk'])


class ContentMakerImageViewSet(ModelViewSet):
    serializer_class = ProviderImageSerializer

    def get_serializer_context(self):
        return {'serviceProvider_id': self.kwargs['contentmaker_pk']}

    def get_queryset(self):
        return ProviderImage.objects.filter(serviceProvider_id=self.kwargs['contentmaker_pk'])


class EntertainerImageViewSet(ModelViewSet):
    serializer_class = ProviderImageSerializer

    def get_serializer_context(self):
        return {'serviceProvider_id': self.kwargs['entertainer_pk']}

    def get_queryset(self):
        return ProviderImage.objects.filter(serviceProvider_id=self.kwargs['entertainer_pk'])


class FoodItemViewSet(ModelViewSet):
    serializer_class=FoodItemSerializer
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options']


    def get_queryset(self):
        return FoodItem.objects.filter(
            catering_id=self.kwargs['catering_pk']
        )
    
    def get_serializer_context(self):
        return {
            'catering_id':self.kwargs['catering_pk']
        }

    def private(self, request, *args, **kargs):
        user=self.get_object()
        data = FoodItemSerializer(user).data
        return Response(data, status=status.HTTP_200_OK)


class FoodImageViewSet(ModelViewSet):
    serializer_class = FoodImageSerializer

    def get_serializer_context(self):
        return {'item_id': self.kwargs['item_pk']}

    def get_queryset(self):
        return FoodImage.objects.filter(fooditem_id=self.kwargs['item_pk'])


class ThemeViewSet(ModelViewSet):
    serializer_class=ThemeSerializer
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options']

    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsDecoratorOrReadOnly()]

    def get_queryset(self):
        return Theme.objects.filter(
            decorator_id=self.kwargs['decorator_pk']
        )
    
    def get_serializer_context(self):
        return {
            'decorator_id':self.kwargs['decorator_pk']
        }

    def private(self, request, *args, **kargs):
        user=self.get_object()
        data = ThemeSerializer(user).data
        return Response(data, status=status.HTTP_200_OK)


class ThemeImageViewSet(ModelViewSet):
    serializer_class = ThemeImageSerializer

    def get_serializer_context(self):
        return {'theme_id': self.kwargs['theme_pk']}

    def get_queryset(self):
        return ThemeImage.objects.filter(theme_id=self.kwargs['theme_pk'])


class PartyViewSet(ModelViewSet):
    def get_queryset(self):
        user = self.request.user

        if user.is_staff:
            return Party.objects.all()
        
        if user.userType=="customer":
            customer_id = Customer.objects.only(
                'id').get(user_id=user.id)
            return Party.objects.filter(customer_id=customer_id)

        elif user.userType=="venue":
            partyset=Party.objects.all()
            returnablePartySet=partyset.none()
            for party in partyset:
                if PartyVenue.objects.filter(party_id=party.id).exists():
                    partyvenue=PartyVenue.objects.get(party_id=party.id)
                    venue=Venue.objects.get(id=partyvenue.venue_id)
                    party.venue_id=Venue.objects.get(id=venue.id).id
                    returnablePartySet|=Party.objects.filter(pk=party.id)

            return returnablePartySet

        elif user.userType=='catering':
            partyset=Party.objects.all()
            returnablePartySet=partyset.none()
            for party in partyset:
                if FoodCartItem.objects.filter(party_id=party.id).exists():
                    foodcartitem=FoodCartItem.objects.get(party_id=party.id)
                    fooditem=FoodItem.objects.get(id=foodcartitem.fooditem_id)
                    party.catering_id=Catering.objects.get(id=fooditem.catering_id).id
                    returnablePartySet|=Party.objects.filter(pk=party.id)


            return returnablePartySet

        elif user.userType=='decorator':
            partyset=Party.objects.all()
            returnablePartySet=partyset.none()
            for party in partyset:
                if PartyDecorator.objects.filter(party_id=party.id).exists():
                    partydecorator=PartyDecorator.objects.get(party_id=party.id)
                    decorator=Decorator.objects.get(id=partydecorator.decorator_id)
                    party.decorator_id=Decorator.objects.get(id=decorator.id).id
                    returnablePartySet|=Party.objects.filter(pk=party.id)

            return returnablePartySet

        elif user.userType=='contentmaker':
            partyset=Party.objects.all()
            returnablePartySet=partyset.none()
            for party in partyset:
                if PartyContentMaker.objects.filter(party_id=party.id).exists():
                    partycontentmaker=PartyContentMaker.objects.get(party_id=party.id)
                    contentmaker=ContentMaker.objects.get(id=partycontentmaker.contentmaker_id)
                    party.contentmaker_id=ContentMaker.objects.get(id=contentmaker.id).id
                    returnablePartySet|=Party.objects.filter(pk=party.id)

            return returnablePartySet



    def get_permissions(self):
        if self.request.method=='POST':
            return [IsCustomerOrReadOnly()]
        return [AllowAny()]

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreatePartySerializer
        elif self.request.method=='PUT':
            return UpdatePartySerializer
        return PartySerializer


    def get_serializer_context(self):
        return {
            'user_id':self.request.user.id,
        }


class PartyCateringViewSet(ModelViewSet):
    def get_queryset(self):
        return Catering.objects \
            .filter(party__id=self.kwargs['party_pk']) \
            .prefetch_related('Party').all()


    def get_serializer_class(self):
        if self.request.method=='POST':
            return AddPartyCateringSerializer
        return CateringSerializer
    


class FoodCartItemViewset(ModelViewSet):

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AddFoodCartItemSerializer
        elif self.request.method=='PUT':
            return UpdateFoodCartItemSerializer
        return FoodCartItemSerializer

    def get_serializer_context(self):
        return {'party_id': self.kwargs['party_pk']}

    def get_queryset(self):
        return FoodCartItem.objects \
            .filter(party_id=self.kwargs['party_pk']) \
            .select_related('fooditem')


class VenueSlotViewSet(ModelViewSet):
    def get_queryset(self):
        return VenueSlot.objects.filter(venue_id=self.kwargs['venue_pk'])

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateVenueSlotSerializer
        return VenueSlotSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateVenueSlotSerializer(
            data=request.data,
            context={
                'id':self.kwargs['venue_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        venue=serializer.save()
        serializer=VenueSlotSerializer(venue)
        return Response(serializer.data)

class PartyVenueSlotViewSet(ModelViewSet):
    http_method_names = ['get', 'put', 'patch', 'delete', 'post']
    
    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return UpdatePartyVenueSlotSerializer
        elif self.request.method in ['POST']:
            return AddPartyVenueSlotSerializer
        return PartyVenueSlotSerializer

    def get_serializer_context(self):
        return {'party_id': self.kwargs['party_pk']}


    def get_queryset(self):
        return PartyVenueSlot.objects \
            .filter(party_id=self.kwargs['party_pk']) \
            .select_related('venueslot')


class PartyDecoratorViewSet(ModelViewSet):
    http_method_names = ['get', 'put', 'patch', 'delete', 'post']
    
    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return UpdatePartyDecoratorSerializer
        elif self.request.method in ['POST']:
            return AddPartyDecoratorSerializer
        return PartyDecoratorSerializer

    def get_serializer_context(self):
        return {'party_id': self.kwargs['party_pk']}


    def get_queryset(self):
        return PartyDecorator.objects \
            .filter(party_id=self.kwargs['party_pk']) \
            .select_related('decorator')



class ContentMakerSlotViewSet(ModelViewSet):
    def get_queryset(self):
        return ContentMakerSlot.objects.filter(contentmaker_id=self.kwargs['contentmaker_pk'])

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateContentMakerSlotSerializer
        return ContentMakerSlotSerializer


    def create(self, request, *args, **kargs):
        serializer=CreateContentMakerSlotSerializer(
            data=request.data,
            context={
                'id':self.kwargs['contentmaker_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        contentmaker=serializer.save()
        serializer=ContentMakerSlotSerializer(contentmaker)
        return Response(serializer.data)


class PartyContentMakerViewSet(ModelViewSet):
    http_method_names = ['get', 'put', 'patch', 'delete', 'post']
    
    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return UpdatePartyContentMakerSerializer
        elif self.request.method in ['POST']:
            return AddPartyContentMakerSerializer
        return PartyContentMakerSerializer

    def get_serializer_context(self):
        return {'party_id': self.kwargs['party_pk']}


    def get_queryset(self):
        return PartyContentMaker.objects \
            .filter(party_id=self.kwargs['party_pk']) \
            .select_related('contentmaker')


class PendingAppointmentsVenueViewSet(ModelViewSet):
    def get_queryset(self):
        return Appointment.objects.filter(status='pending', serviceProvider_id=self.kwargs['venue_pk'])

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateAppointmentSerializer
        elif self.request.method=='PUT':
            return UpdateAppointmentSerializer
        return AppointmentSerializer

    def create(self, request, *args, **kargs):
        serializer=CreateAppointmentSerializer(
            data=request.data,
            context={
                'user_id':self.request.user.id,
                'id':self.kwargs['venue_pk']
                }
        )
        serializer.is_valid(raise_exception=True)
        review=serializer.save()
        serializer=CreateAppointmentSerializer(review)
        return Response(serializer.data)


class AcceptedAppointmentsVenueViewSet(ModelViewSet):
    def get_queryset(self):
        return Appointment.objects.filter(status='accepted', serviceProvider_id=self.kwargs['venue_pk'])

    def get_serializer_class(self):
        return AppointmentSerializer


class PaymentViewSet(ModelViewSet):
    def get_queryset(self):
        return Payment.objects.filter(party_id=self.kwargs['party_pk'])
    
    def get_serializer_class(self):
        if self.request.method=='POST':
            return AddPaymentSerializer
        return PaymentSerializer

    def get_serializer_context(self):
        return {
            'party_id':self.kwargs['party_pk'],
            'user_id':self.request.user.id
        }

class ProgressViewSet(ModelViewSet):
    def get_queryset(self):
        return Progress.objects.filter(party_id=self.kwargs['party_pk'])

    def get_serializer_class(self):
        if self.request.method=='POST':
            return AddProgressSerializer
        return ProgressSerializer

    def get_serializer_context(self):
        return {
            'party_id':self.kwargs['party_pk'],
            'user_id':self.request.user.id,
            'user_type':self.request.user.userType
        }


class PartyVenueViewSet(ModelViewSet):
    http_method_names = ['get', 'put', 'patch', 'delete', 'post']
    
    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return UpdatePartyVenueSerializer
        elif self.request.method in ['POST']:
            return AddPartyVenueSerializer
        return PartyVenueSerializer

    def get_serializer_context(self):
        return {'party_id': self.kwargs['party_pk']}


    def get_queryset(self):
        return PartyVenue.objects \
            .filter(party_id=self.kwargs['party_pk']) \
            .select_related('venue')




@api_view(['GET', 'POST'])
def recommendation(request):
    if request.method=='GET':
        partyset=Party.objects.all().prefetch_related('partyvenueslot')

        return Response({'data':'empty'})
    elif request.method=='POST':
        serializer=RecommendationInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        inputParty={}
        inputParty['budget']=serializer.validated_data['budget']
        if serializer.validated_data['city']=='Dhaka':
            inputParty['locationLatitude']=Decimal(23.8103)
            inputParty['locationLongitude']=Decimal(90.4125)
        elif serializer.validated_data['city']=='Chitagong':
            inputParty['locationLatitude']=Decimal(22.3569)
            inputParty['locationLongitude']=Decimal(91.7832)
        elif serializer.validated_data['city']=='Sylhet':
            inputParty['locationLatitude']=Decimal(24.8949)
            inputParty['locationLongitude']=Decimal(91.8687)
        elif serializer.validated_data['city']=='Rajshahi':
            inputParty['locationLatitude']=Decimal(24.3745)
            inputParty['locationLongitude']=Decimal(88.6042)
        elif serializer.validated_data['city']=='Khulna':
            inputParty['locationLatitude']=Decimal(22.8456)
            inputParty['locationLongitude']=Decimal(89.5403)
        elif serializer.validated_data['city']=='Barisal':
            inputParty['locationLatitude']=Decimal(22.7010)
            inputParty['locationLongitude']=Decimal(90.3535)
        elif serializer.validated_data['city']=='Rangpur':
            inputParty['locationLatitude']=Decimal(25.7439)
            inputParty['locationLongitude']=Decimal(89.2752)
        elif serializer.validated_data['city']=='Comilla':
            inputParty['locationLatitude']=Decimal(23.4607)
            inputParty['locationLongitude']=Decimal(91.1809)
        else:
            inputParty['locationLatitude']=Decimal(23.8103)
            inputParty['locationLongitude']=Decimal(90.4125)

        inputParty['guestCount']=serializer.validated_data['guestCount']

        partyset=Party.objects.all().prefetch_related('partyvenueslot')

        for party in partyset:
            if PartyVenue.objects.filter(party_id=party.id).exists():
                partyvenue=PartyVenue.objects.get(party_id=party.id)
                venue=Venue.objects.get(id=partyvenue.venue_id)
                party.venue_id=Venue.objects.get(id=venue.id).id
            else:
                party.venue_id=NULL
            


            if FoodCartItem.objects.filter(party_id=party.id).exists():
                foodcartitem=FoodCartItem.objects.get(party_id=party.id)
                fooditem=FoodItem.objects.get(id=foodcartitem.fooditem_id)
                party.catering_id=Catering.objects.get(id=fooditem.catering_id).id
            else:
                party.catering_id=NULL



            if PartyDecorator.objects.filter(party_id=party.id).exists():
                partydecorator=PartyDecorator.objects.get(party_id=party.id)
                decorator=Decorator.objects.get(id=partydecorator.decorator_id)
                party.decorator_id=Decorator.objects.get(id=decorator.id).id
            else:
                party.decorator_id=NULL



            if PartyContentMaker.objects.filter(party_id=party.id).exists():
                partycontentmaker=PartyContentMaker.objects.get(party_id=party.id)
                contentmaker=ContentMaker.objects.get(id=partycontentmaker.contentmaker_id)
                party.contentmaker_id=ContentMaker.objects.get(id=contentmaker.id).id
            else:
                party.contentmaker_id=NULL

            party.distance=0
            party.distance+=((party.totalCost-inputParty['budget'])/Decimal(20000.0))*(((party.totalCost-inputParty['budget']))/Decimal(20000.0))
            party.distance+=((party.locationLatitude-inputParty['locationLatitude'])*Decimal(2000.0))*((party.locationLatitude-inputParty['locationLatitude'])*Decimal(2000.0))
            party.distance+=((party.locationLongitude-inputParty['locationLongitude'])*Decimal(2000.0))*((party.locationLongitude-inputParty['locationLongitude'])*Decimal(2000.0))
            party.distance+=((party.guestCount-inputParty['guestCount'])/Decimal(10.0))*((party.guestCount-inputParty['guestCount'])/Decimal(10.0))
            
            party.distance=sqrt(abs(party.distance))
            party.distance=abs(party.distance)

            print(party.distance)


        partyset=sorted(partyset, key=lambda x:x.distance)
        serializer=PartySerializer(partyset, many=True)

        k=5
        returnableVenue=0
        returnableVenueCount=0
        returnableCatering=0
        returnableCateringCount=0
        returnableDecorator=0
        returnableDecoratorCount=0
        returnableContentMaker=0
        returnableContentMakerCount=0
        venueDictionary={}
        cateringDictionary={}
        decoratorDictionary={}
        contentmakerDictionary={}
        for i in range(0, min(k, len(partyset))):
            party=partyset[i]
            if party.venue_id!=NULL:
                if party.venue_id in venueDictionary:
                    venueDictionary[party.venue_id]+=1
                else:
                    venueDictionary[party.venue_id]=1
                if venueDictionary[party.venue_id]>returnableVenueCount:
                    returnableVenueCount=venueDictionary[party.venue_id]
                    returnableVenue=party.venue_id

            if party.catering_id!=NULL:
                if party.catering_id in cateringDictionary:
                    cateringDictionary[party.catering_id]+=1
                else:
                    cateringDictionary[party.catering_id]=1
                if cateringDictionary[party.catering_id]>returnableCateringCount:
                    returnableCateringCount=cateringDictionary[party.catering_id]
                    returnableCatering=party.catering_id
            if party.decorator_id!=NULL:
                if party.decorator_id in decoratorDictionary:
                    decoratorDictionary[party.decorator_id]+=1
                else:
                    decoratorDictionary[party.decorator_id]=1
                if decoratorDictionary[party.decorator_id]>returnableDecoratorCount:
                    returnableDecoratorCount=decoratorDictionary[party.decorator_id]
                    returnableDecorator=party.decorator_id
            if party.contentmaker_id!=NULL:
                if party.contentmaker_id in contentmakerDictionary:
                    contentmakerDictionary[party.contentmaker_id]+=1
                else:
                    contentmakerDictionary[party.contentmaker_id]=1
                if contentmakerDictionary[party.contentmaker_id]>returnableContentMakerCount:
                    returnableContentMakerCount=contentmakerDictionary[party.contentmaker_id]
                    returnableContentMaker=party.contentmaker_id

        venue=[]
        catering=[]
        decorator=[]
        contentmaker=[]
        if Venue.objects.filter(id=returnableVenue).exists():
            venuequery=Venue.objects.get(pk=returnableVenue)
            venueserializer=VenueSerializer(venuequery)
            venue.append(venueserializer.data)

        if Catering.objects.filter(id=returnableCatering).exists():
            Cateringquery=Catering.objects.get(pk=returnableCatering)
            Cateringserializer=CateringSerializer(Cateringquery)
            catering.append(Cateringserializer.data)

        if Decorator.objects.filter(id=returnableDecorator).exists():
            Decoratorquery=Decorator.objects.get(pk=returnableDecorator)
            Decoratorserializer=DecoratorSerializer(Decoratorquery)
            decorator.append(Decoratorserializer.data)

        if ContentMaker.objects.filter(id=returnableContentMaker).exists():
            ContentMakerquery=ContentMaker.objects.get(pk=returnableContentMaker)
            ContentMakerserializer=ContentMakerSerializer(ContentMakerquery)
            contentmaker.append(ContentMakerserializer.data)

        
        return Response(
            {
                'venue': venue,
                'catering': catering,
                'decorator': decorator,
                'contentmaker': contentmaker
            }
            )

@api_view(['POST', 'GET'])
def dummyparty(request):
    if request.method=='POST':
        serializer=AddDummyParty(data=request.data)
        serializer.is_valid(raise_exception=True)
        customer=Customer.objects.get(
            user_id=request.user.id
        )
        party=Party.objects.create(
            guestCount=serializer.validated_data['guestCount'], customer=customer,
            locationLatitude=Decimal(23.81),
            locationLongitude=Decimal(90.41)
            )
        PartyVenue.objects.create(party_id=party.id, venue_id=serializer.validated_data['venue_id'])
        FoodCartItem.objects.create(
            party_id=party.id,
            fooditem_id=serializer.validated_data['fooditem_id'],
            catering_id=serializer.validated_data['catering_id'],
            quantity=serializer.validated_data['quantity']
            )
        PartyDecorator.objects.create(party_id=party.id, decorator_id=serializer.validated_data['decorator_id'])
        PartyContentMaker.objects.create(party_id=party.id, contentmaker_id=serializer.validated_data['contentmaker_id'])
    
    return Response({'data':'ok'})
