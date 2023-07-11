from django.shortcuts import render
from rest_framework import generics
from .models import Atendimentos, Cliente, Profissional, Agenda
from .serializers import AtendimentosSerializer, ClienteSerializer, ProfissionalSerializer, AgendaSerializer


# Create Acc Cliente
class ClienteAPIView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    http_method_names = ['get', 'post', 'patch']


# Create Acc Profissional
# Listar Profissionais
class ProfissionalAPIView(generics.ListCreateAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer
    http_method_names = ['get', 'post', 'patch']


# Listar Agendamentos
class AtendimentosAPIView(generics.ListCreateAPIView):
    queryset = Atendimentos.objects.all()
    serializer_class = AtendimentosSerializer
    http_method_names = ['get', 'post', 'patch']


# Agendamento
# Cancelamento Cliente
# Cancelamento Profissional
class AgendaAPIView(generics.ListCreateAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    http_method_names = ['get', 'post', 'patch']


# Login Cliente
class LoginClienteAPIView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    http_method_names = ['get', 'post', 'patch']


# Login Profissional
class LoginClienteAPIView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    http_method_names = ['get', 'post', 'patch']
