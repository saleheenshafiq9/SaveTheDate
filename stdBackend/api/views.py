import django
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import Review, Catering, ContentMaker, Customer, Decorator, Entertainer, Venue
from .serializers import CateringSerializer, ContentMakerSerializer, DecoratorSerializer, EntertainerSerializer, ReviewVenueSerailizer, CustomerSerializer, VenueSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


# Create your views here.
class CustomerViewSet(ModelViewSet): 
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer

    @action(detail=False, methods=['GET', 'PUT'])
    def me(self, request):
        (customer, created)=Customer.objects.get_or_create(
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
        (venue, created)=Venue.objects.get_or_create(
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
        (catering, created)=Catering.objects.get_or_create(
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
        (decorator, created)=Decorator.objects.get_or_create(
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
        (contentmaker, created)=ContentMaker.objects.get_or_create(
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
        (entertainer, created)=Entertainer.objects.get_or_create(
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
    serializer_class=ReviewVenueSerailizer
    def get_queryset(self):
        return Review.objects.filter(serviceProvider_id=self.kwargs['venue_pk'])
    
    def get_serializer_context(self):
        return { 'venue_id':self.kwargs['venue_pk']}

class ReviewCateringViewSet(ModelViewSet):
    serializer_class=ReviewVenueSerailizer
    def get_queryset(self):
        return Review.objects.filter(catering_id=self.kwargs['catering_pk'])
    
    def get_serializer_context(self):
        return { 'catering_id':self.kwargs['catering_pk']}


class ReviewCateringViewSet(ModelViewSet):
    serializer_class=ReviewVenueSerailizer
    def get_queryset(self):
        return Review.objects.filter(catering_id=self.kwargs['catering_pk'])
    
    def get_serializer_context(self):
        return { 'catering_id':self.kwargs['catering_pk']}
