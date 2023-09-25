from django.test import TestCase
import pytest
from .models import *
from django.core.exceptions import ObjectDoesNotExist


# Create your tests here.
class ClienteTestCase(TestCase):
    def setUp(self):
        self.email_cliente_cadastrado = 'oi@oi.com.br'
        self.email_cliente_nao_cadastrado = 'oi@nao_cadastrado.com.br'

        self.senha_teste = 'abc123'
        self.nome_cliente_cadastrado = 'cliente_cadastrado'

        Cliente.objects.create(nome=self.nome_cliente_cadastrado, email=self.email_cliente_cadastrado, senha=self.senha_teste)
    
    def test_cliente_cadastrado(self):
        existe = Cliente.objects.get(email=self.email_cliente_cadastrado, senha=self.senha_teste)
        assert(existe.nome==self.nome_cliente_cadastrado)
    
    def test_cliente_nao_cadastrado(self):
        with pytest.raises(ObjectDoesNotExist):
            existe = Cliente.objects.get(email=self.email_cliente_nao_cadastrado, senha=self.senha_teste)