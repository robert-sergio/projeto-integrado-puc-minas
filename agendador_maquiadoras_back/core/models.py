from django.db import models
from django.contrib.auth.hashers import make_password
from django.utils import timezone as tz

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

    endereco = models.CharField(max_length=500, null=False)
    profissao = models.CharField(max_length=250, choices=(('MANICURE','MANICURE'),('MAQUIADORA','MAQUIADORA')))
    especialidades = models.CharField(max_length=250, choices=(('Unha Acrigel','Unha Acrigel'),('Maquiagem Casamento', 'Maquiagem Casamento')))

    telefone = models.CharField(max_length=25)
    whatsapp = models.CharField(max_length=25)
    instagram = models.CharField(max_length=500, null=True)
    facebook = models.CharField(max_length=500, null=True)


class Agenda(models.Model):
    profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE)
    data = models.DateField(null=True)
    hora = models.CharField(max_length=4, null=True)
    livre = models.BooleanField(default=True)

    class Meta:
        unique_together = (('data', 'hora'),)
    

class Atendimentos(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    profissional = models.ForeignKey(Profissional, related_name='profissionais', on_delete=models.CASCADE)
    agenda = models.ForeignKey(Agenda, on_delete=models.CASCADE)

    cidade_atendimento = models.CharField(max_length=500)
    valor = models.DecimalField(decimal_places=2, max_digits=6)

    msg = models.CharField(max_length=100)

    dt_created = models.DateTimeField(default=tz.now, editable=False)
    dt_atualizacao = models.DateTimeField(default=tz.now)
    cocncluido = models.BooleanField(default=False)

