from rest_framework import serializers
from .models import Atendimentos, Cliente, Profissional, Agenda


class AtendimentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atendimentos
        fields = '__all__'
    

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'


class ProfissionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = '__all__'


class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__'


# --------------- Serializers Customizados
class ProfissionalResumidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = ['nome', 'profissao', 'especialidades']

class ClienteResumidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nome']

class AgendaReduzidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = ['pk', 'data', 'hora', 'livre']

class AtendimentosTesteSerializer(serializers.ModelSerializer):
    cliente = ClienteResumidoSerializer()
    profissional =  ProfissionalResumidoSerializer()
    agenda = AgendaReduzidaSerializer()
    class Meta:
        model = Atendimentos
        fields = ['pk', 'dt_atualizacao', 'msg','valor','cocncluido','cidade_atendimento', 'cliente', 'profissional', 'agenda']

