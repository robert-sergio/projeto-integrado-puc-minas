from django.urls import path
from .views import ( AtendimentosAPIView, AtendimentoAPIView,  ClientesAPIView, ProfissionaisAPIView, AgendasAPIView, AgendaAPIView,  ClienteAPIView,
                    LoginClienteAPIVIew, CriarAtendimentoAPIView, CreateProfissionalAPIView
                    )

urlpatterns = [
    path('clientes/', ClientesAPIView.as_view(), name='clientes'),
    path(r'cliente/<pk>', ClienteAPIView.as_view(), name='cliente'),
    path('logincliente', LoginClienteAPIVIew.as_view(), name='login_cliente'),    

    path('createprofissional/', CreateProfissionalAPIView.as_view(), name='create_profissional'),
    path('profissionais/', ProfissionaisAPIView.as_view(), name='profissionais'),

    path('agendas/', AgendasAPIView.as_view(), name='agendas'),
    path(r'agenda/<pk>', AgendaAPIView.as_view(), name='agenda'),

    path('novo_atendimento/', CriarAtendimentoAPIView.as_view(), name='novo_atendimentos'),

    path('atendimentos/', AtendimentosAPIView.as_view(), name='atendimentos'),
    path(r'atendimento/<pk>', AtendimentoAPIView.as_view(), name='atendimento'),
]