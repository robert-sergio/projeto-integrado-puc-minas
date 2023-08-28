from django.urls import path
from .views import ( AtendimentosAPIView, AtendimentoAPIView,  ClientesAPIView, ProfissionaisAPIView, AgendasAPIView, AgendaAPIView,  ClienteAPIView, ProfissionalAPIView ,
                    LoginClienteAPIVIew, LoginProfissionalAPIVIew, CriarAtendimentoAPIView
                    )

urlpatterns = [
    path('clientes/', ClientesAPIView.as_view(), name='clientes'),
    path(r'cliente/<pk>', ClienteAPIView.as_view(), name='cliente'),
    path('logincliente', LoginClienteAPIVIew.as_view(), name='login_cliente'),    

    path('profissionais/', ProfissionaisAPIView.as_view(), name='profissionais'),
    path(r'profissional/<pk>', ProfissionalAPIView.as_view(), name='profissional'),
    path('loginprofissional/', LoginProfissionalAPIVIew.as_view(), name='login_profissional'),

    path('agendas/', AgendasAPIView.as_view(), name='agendas'),
    path(r'agenda/<pk>', AgendaAPIView.as_view(), name='agenda'),

    path('novo_atendimento/', CriarAtendimentoAPIView.as_view(), name='novo_atendimentos'),

    path('atendimentos/', AtendimentosAPIView.as_view(), name='atendimentos'),
    path(r'atendimento/<pk>', AtendimentoAPIView.as_view(), name='atendimento'),
]