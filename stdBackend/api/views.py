import django
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .permissions import IsCateringOrReadOnly, IsCustomerOrReadOnly, IsDecoratorOrReadOnly
from .models import Party, Theme, Review, Catering, ContentMaker, Customer, Decorator, Entertainer, Venue, ProviderImage, FoodImage, ThemeImage, FoodItem
from .serializers import CateringSerializer, ContentMakerSerializer, CreateReviewSerializer, DecoratorSerializer, EntertainerSerializer, FoodItemSerializer, PartySerializer, ReviewSerializer, CustomerSerializer, VenueSerializer, ProviderImageSerializer, FoodImageSerializer, ThemeSerializer, ThemeImageSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework import status

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
        return Review.objects.filter(id=self.kwargs['venue_pk'])
    

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
        return Review.objects.filter(id=self.kwargs['decorator_pk'])
    

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
        return Review.objects.filter(id=self.kwargs['contentmaker_pk'])
    

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

    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsCateringOrReadOnly()]

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
    queryset=Party.objects.all()
    serializer_class=PartySerializer

    def get_serializer_context(self):
        return {
            'user_id':self.request.user.id
        }




