from django.db import models
from django.contrib.auth.hashers import make_password
from django.utils import timezone as tz
from datetime import datetime
from django.contrib.postgres.fields import ArrayField

class Cliente(models.Model):
    nome = models.CharField(max_length=250, null=False)
    endereco = models.CharField(max_length=500, null=False)
    telefone = models.CharField(max_length=25)
    whatsapp = models.CharField(max_length=25)
    email = models.CharField(max_length=100, null=False, unique=True)
    senha = models.CharField(max_length=24, null=False)


class Profissional(models.Model):
    nome = models.CharField(max_length=250, null=False)
    cpf = models.CharField(max_length=15, null=False, unique=True)
    senha = models.CharField(max_length=24, null=False)
    email = models.CharField(max_length=100, null=False)
    foto = models.CharField(max_length=250, null=False)
    endereco = models.CharField(max_length=500, null=False)
    profissao = models.CharField(max_length=250)
    telefone = models.CharField(max_length=25)
    whatsapp = models.CharField(max_length=25)
    instagram = models.CharField(max_length=500, null=True)
    facebook = models.CharField(max_length=500, null=True)
    estrelas = models.IntegerField()
    qtd_atds = models.IntegerField()
    dt_cadastro = models.DateField(default=datetime.now().date(), editable=True)
    especialidades = models.CharField(max_length=500, null=True)


class Servicos(models.Model):
    ativo = models.BooleanField(default=True)
    especialidade = models.CharField(max_length=250, null=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE)


class Agenda(models.Model):
    profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE)
    data = models.DateField(null=True)
    hora = models.CharField(max_length=4, null=True)
    livre = models.BooleanField(default=True)

    class Meta:
        unique_together = (('data', 'hora'),)
    

class Atendimentos(models.Model):
    servicos = models.ManyToManyField(Servicos)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    profissional = models.ForeignKey(Profissional, related_name='profissionais', on_delete=models.CASCADE)
    agenda = models.ForeignKey(Agenda, on_delete=models.CASCADE)

    cidade_atendimento = models.CharField(max_length=500)
    valor = models.DecimalField(decimal_places=2, max_digits=6)

    msg = models.CharField(max_length=100)

    dt_created = models.DateTimeField(default=tz.now, editable=False)
    dt_atualizacao = models.DateTimeField(default=tz.now)
    cocncluido = models.BooleanField(default=False)

