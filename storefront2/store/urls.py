from cgitb import lookup
from email.mime import base
from django.urls import path, include
from . import views
from rest_framework_nested import routers
from . import views

router=routers.DefaultRouter()
router.register('products', views.ProductViewSet, basename='products')

products_router=routers.NestedDefaultRouter(router, 'products', lookup='product')

# URLConf
urlpatterns = router.urls
