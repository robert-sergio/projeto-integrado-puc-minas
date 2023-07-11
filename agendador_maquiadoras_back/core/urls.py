from django.urls import path
from .views import AtendimentosAPIView, ClienteAPIView, ProfissionalAPIView, AgendaAPIView

urlpatterns = [
    path('atendimentos/', AtendimentosAPIView.as_view(), name='atendimentos'),
    path('clientes/', ClienteAPIView.as_view(), name='clientes'),
    path('profissionais/', ProfissionalAPIView.as_view(), name='profissionais'),
    path('agenda_profissional/', AgendaAPIView.as_view(), name='agenda_profissional'),
]