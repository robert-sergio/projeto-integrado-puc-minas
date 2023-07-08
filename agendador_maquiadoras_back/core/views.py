from django.shortcuts import render
from rest_framework import generics
from .models import Atendimentos
from .serializers import AtendimentosSerializer

class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = Atendimentos.objects.all()
    serializer_class = AtendimentosSerializer

# Create Acc Cliente
# Create Acc Profissional

# Login Cliente
# Login Profissional

# Listar Profissionais

# Agendamento
# Listar Agendamentos

# Cancelamento Cliente
# Cancelamento Profissional