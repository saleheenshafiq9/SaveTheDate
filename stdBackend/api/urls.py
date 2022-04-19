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

catering_router=routers.NestedDefaultRouter(router, 'caterings', lookup='catering')
catering_router.register('reviews', views.ReviewCateringViewSet, basename='provider-reviews')


urlpatterns=router.urls+venue_router.urls+catering_router.urls