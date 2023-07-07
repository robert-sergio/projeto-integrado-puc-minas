from django.urls import path
from core.views import MyView

urlpatterns = [
    path('about/', MyView.as_view(), name='test'),
]