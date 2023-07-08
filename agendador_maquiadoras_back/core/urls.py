from django.urls import path
from .views import OrderListCreateAPIView

urlpatterns = [
    path('about/', OrderListCreateAPIView.as_view(), name='test'),
]