from cgitb import lookup
from email.mime import base
from . import views
from rest_framework_nested import routers
from . import views

router=routers.DefaultRouter()
router.register('customers', views.CustomerViewSet)
router.register('venues', views.VenueViewSet)
router.register('caterings', views.CateringViewSet)
router.register('decorators', views.DecoratorViewSet)
router.register('contentmakers', views.ContentMakerViewSet)
router.register('entertainers', views.EntertainerViewSet)
router.register('partys', views.PartyViewSet, basename='party')


party_router=routers.NestedDefaultRouter(router, 'partys', lookup='party')
party_router.register('caterings', views.PartyCateringViewSet, basename='party-caterings')
party_router.register('foodcartitems', views.FoodCartItemViewset, basename='party-fooditems')
party_router.register('venueslots', views.PartyVenueSlotViewSet, basename='party-venueslots')
party_router.register('themeslots', views.PartyThemeSlotViewSet, basename='party-themeslots')



venue_router=routers.NestedDefaultRouter(router, 'venues', lookup='venue')
venue_router.register('reviews', views.ReviewVenueViewSet, basename='provider-reviews')
venue_router.register('images', views.VenueImageViewSet, basename='venue-images')
venue_router.register('slots', views.VenueSlotViewSet, basename='venue-slots')



catering_router=routers.NestedDefaultRouter(router, 'caterings', lookup='catering')
catering_router.register('reviews', views.ReviewCateringViewSet, basename='provider-reviews')
catering_router.register('images', views.CateringImageViewSet, basename='catering-images')
catering_router.register('items', views.FoodItemViewSet, basename='catering-items')
fooditem_router=routers.NestedDefaultRouter(catering_router, 'items', lookup='item')
fooditem_router.register('images', views.FoodImageViewSet, basename='item-images')



decorator_router=routers.NestedDefaultRouter(router, 'decorators', lookup='decorator')
decorator_router.register('reviews', views.ReviewDecoratorViewSet, basename='provider-reviews')
decorator_router.register('images', views.DecoratorImageViewSet, basename='theme-images')
decorator_router.register('themes', views.ThemeViewSet, basename='decorator-themes')
theme_router=routers.NestedDefaultRouter(decorator_router, 'themes', lookup='theme')
theme_router.register('images', views.ThemeImageViewSet, basename='theme-images')




contentmaker_router=routers.NestedDefaultRouter(router, 'contentmakers', lookup='contentmaker')
contentmaker_router.register('reviews', views.ReviewContentMakerViewSet, basename='provider-reviews')
contentmaker_router.register('images', views.ContentMakerImageViewSet, basename='contentmaker-images')


entertainer_router=routers.NestedDefaultRouter(router, 'entertainers', lookup='entertainer')
entertainer_router.register('reviews', views.ReviewEntertainerViewSet, basename='provider-reviews')
entertainer_router.register('images', views.EntertainerImageViewSet, basename='entertainer-images')



urlpatterns=router.urls+venue_router.urls+catering_router.urls+decorator_router.urls+contentmaker_router.urls+entertainer_router.urls+fooditem_router.urls+theme_router.urls+party_router.urls