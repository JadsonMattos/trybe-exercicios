from django.urls import path, include
from products.views import (
    index, product, seller, buyer, order
)

urlpatterns = [
    path('', index, name='index'),
    path('', include('products.urls')),
    path('product', product, name='product'),
    path('seller', seller, name='seller'),
    path('buyer', buyer, name='buyer'),
    path('order', order, name='order'),
]
