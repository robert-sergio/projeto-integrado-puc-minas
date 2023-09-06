from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from .models import Atendimentos, Cliente, Profissional, Agenda
from .serializers import *
from django_filters.rest_framework import DjangoFilterBackend


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
    serializer_class = LoginClienteSerializer
    http_method_names = ['post','options']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['email','senha']

# Create Acc Profissional
class CreateProfissionalAPIView(generics.ListCreateAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalCreateSerializer
    http_method_names = ['post']

# Listar Profissionais
class ProfissionaisAPIView(generics.RetrieveUpdateAPIView):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalGetSerializer
    http_method_names = ['get', 'patch']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','profissao', 'endereco', 'especialidades']

# Agenda
class AgendasAPIView(generics.ListCreateAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    http_method_names = ['get', 'post']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['profissional']

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
