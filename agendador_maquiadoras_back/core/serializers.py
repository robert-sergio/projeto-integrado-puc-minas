from rest_framework import serializers
from .models import Atendimentos

class AtendimentosSerializer(serializers.Serializer):
    class Meta:
        model = Atendimentos
        fields = '__all__'