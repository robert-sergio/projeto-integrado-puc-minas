from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from .models import Atendimentos, Cliente, Profissional, Agenda, Especialidades
from .serializers import *
from django_filters.rest_framework import DjangoFilterBackend
import json


# Create Acc Cliente
class ClientesAPIView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    http_method_names = ['get', 'post']


# Patch Cliente
class ClienteAPIView(generics.RetrieveUpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    http_method_names = ['get', 'patch']

# Login Cliente
class LoginClienteAPIVIew(generics.RetrieveAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    http_method_names = ['post','options']

    def post(self, request):
        email = request.data.get("email")
        senha = request.data.get("senha")
        result = self.queryset.filter(email= email, senha=senha)
        if len(result) == 0:
            content = {
                'message':f"Dados não conferem!",
                'authorized':False
                }
            return Response(content,status=status.HTTP_403_FORBIDDEN)

        content = {
                   'message':f"Autorizado!",
                   'authorized':True, 
                   'nome':result.values()[0].get('nome'),
                   'id':result.values()[0].get('id')
                   }
        return Response(content,status=status.HTTP_200_OK)


# Create Acc Profissional
class CreateProfissionalAPIView(generics.ListCreateAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalCreateSerializer
    http_method_names = ['post']

# Create Acc Profissional
class UpdtProfissionalAPIView(generics.UpdateAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalCreateSerializer
    http_method_names = ['patch']

# Listar Profissionais
class ProfissionaisAPIView(generics.ListAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalGetSerializer
    http_method_names = ['get', 'patch']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','profissao', 'endereco', ] # 'especialidades'


class ServicosProfissionalAPIView(generics.ListCreateAPIView):
    queryset = Especialidades.objects.all()
    serializer_class = ServicosSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','profissional'] 

# Agenda
class AgendasAPIView(generics.ListCreateAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    http_method_names = ['get', 'post']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['profissional']

class CardAgendaAPIView(generics.ListCreateAPIView):
    http_method_names = ['get', 'post']
    serializer_class = AgendaSerializer

    def get(self, request):
        idprofissional = request.query_params.get('profissional',None)
        content = []

        if idprofissional:
            queryset = Agenda.objects.filter(profissional=idprofissional).values('data','id','livre','hora').order_by('data')
        
            if len(queryset) > 0:
                for data in queryset.values('data').distinct('data'):
                    value = {}
                    value[str(data['data'])] = []
                    for dados in queryset.filter(data=str(data.get('data'))):
                        value[str(data['data'])].append({
                            'id':dados['id'],
                            'livre':dados['livre'],
                            'hora':dados['hora']
                        })

                    content.append(value)
                    del value

        return Response(content, status=status.HTTP_200_OK)

class AgendaAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    http_method_names = ['get','patch', 'delete']


# Listar Agendamentos
class AtendimentosAPIView(generics.ListAPIView):
    queryset = Atendimentos.objects.all()
    serializer_class = AtendimentosTesteSerializer
    http_method_names = ['get']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['profissional', 'cliente']

# Criar Agendamentos
class CriarAtendimentoAPIView(generics.ListCreateAPIView):
    queryset = Atendimentos.objects.all()
    serializer_class = AtendimentosSerializer
    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        livre = Agenda.objects.filter(pk=request.data['agenda']).values()[0].get('livre')

        if not livre:
            content = {f"Agenda nao disponivel!"}
            return Response(content,status=status.HTTP_403_FORBIDDEN)
        
        Agenda.objects.filter(pk=request.data['agenda']).update(livre=False)

        servicos = Especialidades.objects.filter(profissional=request.data['profissional']).only('id', 'preco')
        valor = sum([ float(servicos.filter(id=x).values()[0]['preco']) for x in request.data['servicos']])

        request.data['valor'] = valor
        request.data['msg'] = 'Aguardando Confirmacao'

        return self.create(request, *args, **kwargs)

# Cancelamento Cliente
# Cancelamento Profissional
class AtendimentoAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Atendimentos.objects.all()
    serializer_class = AtendimentosTesteSerializer
    http_method_names = ['get', 'patch']

    def patch(self, request, pk):
        atd = Atendimentos.objects.get(pk=pk)

        livre = request.data.get('livre',None)
        
        values = {}

        if request.data.get('cocncluido',None) is not None:
            values['cocncluido'] = request.data.get('cocncluido',None)

        if request.data.get('msg',None) is not None:
            values['msg'] = request.data.get('msg',None)

        if livre != None:
            agd = Agenda.objects.filter(pk=atd.agenda_id).update(livre=livre)
        
        Atendimentos.objects.update(**values)
        content = {f"Autorizado!"}
        return Response(content,status=status.HTTP_200_OK)
