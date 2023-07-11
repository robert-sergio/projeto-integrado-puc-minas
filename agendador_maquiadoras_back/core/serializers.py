from rest_framework import serializers
from .models import Atendimentos, Cliente, Profissional, Agenda

class AtendimentosSerializer(serializers.Serializer):
    class Meta:
        model = Atendimentos
        fields = '__all__'

class ClienteSerializer(serializers.Serializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class ProfissionalSerializer(serializers.Serializer):
    class Meta:
        model = Profissional
        fields = '__all__'

class AgendaSerializer(serializers.Serializer):
    class Meta:
        model = Agenda
        fields = '__all__'