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

venue_router=routers.NestedDefaultRouter(router, 'venues', lookup='venue')
venue_router.register('reviews', views.ReviewVenueViewSet, basename='provider-reviews')
venue_router.register('images', views.VenueImageViewSet, basename='venue-images')


catering_router=routers.NestedDefaultRouter(router, 'caterings', lookup='catering')
catering_router.register('reviews', views.ReviewCateringViewSet, basename='provider-reviews')
catering_router.register('images', views.CateringImageViewSet, basename='catering-images')


decorator_router=routers.NestedDefaultRouter(router, 'decorators', lookup='decorator')
decorator_router.register('reviews', views.ReviewDecoratorViewSet, basename='provider-reviews')
decorator_router.register('images', views.DecoratorImageViewSet, basename='venue-images')


contentmaker_router=routers.NestedDefaultRouter(router, 'contentmakers', lookup='contentmaker')
contentmaker_router.register('reviews', views.ReviewContentMakerViewSet, basename='provider-reviews')
contentmaker_router.register('images', views.ContentMakerImageViewSet, basename='contentmaker-images')


entertainer_router=routers.NestedDefaultRouter(router, 'entertainers', lookup='entertainer')
entertainer_router.register('reviews', views.ReviewEntertainerViewSet, basename='provider-reviews')
entertainer_router.register('images', views.EntertainerImageViewSet, basename='entertainer-images')



urlpatterns=router.urls+venue_router.urls+catering_router.urls+decorator_router.urls+contentmaker_router.urls+entertainer_router.urls