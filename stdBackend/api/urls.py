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

provider_router=routers.NestedDefaultRouter(router, 'venues', lookup='venue')
provider_router.register('reviews', views.ReviewViewSet, basename='provider-reviews')

urlpatterns=router.urls+provider_router.urls