from rest_framework import serializers
from .models import Atendimentos, Cliente, Profissional, Agenda, Servicos


class AtendimentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atendimentos
        fields = '__all__'
    

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class LoginClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nome','email']

class ProfissionalCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = '__all__'

class ProfissionalGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = ['id', 'nome', 'foto', 'endereco', 'profissao',
                  'estrelas', 'qtd_atds', 'sobre']


class ServicosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicos
        fields = '__all__'


class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields= '__all__'

# --------------- Serializers Customizados
class ProfissionalResumidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = ['nome', 'profissao', 'foto']

class ClienteResumidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nome']

class AgendaReduzidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = ['data', 'hora']


class ServicosResumidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicos
        fields = ['id', 'preco', 'servico']


class AtendimentosTesteSerializer(serializers.ModelSerializer):
    cliente = ClienteResumidoSerializer()
    profissional =  ProfissionalResumidoSerializer()
    agenda = AgendaReduzidaSerializer()
    servicos = ServicosResumidoSerializer(read_only=True, many=True)
    class Meta:
        model = Atendimentos
        fields = ['pk', 'dt_updated', 'msg','valor','concluido','cidade_atendimento', 'cliente', 'profissional', 'agenda', 'servicos']


class ProfissaoFiltroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = ['profissao']

class FiltroSerializer(serializers.ModelSerializer):
    profissoes = ProfissaoFiltroSerializer(read_only=True)

    class Meta:
        model = Profissional
        fields = ['profissoes']