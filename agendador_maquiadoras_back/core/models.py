from django.db import models

class Cliente(models.Model):
    nome = models.CharField(max_length=250, null=False)
    endereco = models.CharField(max_length=500, null=False)
    telefone = models.CharField(max_length=25)
    whatsapp = models.CharField(max_length=25)
    email = models.EmailField(max_length=100, null=False)
    senha = models.CharField(max_length=24, null=False)

class Profissional(models.Model):
    nome = models.CharField(max_length=250, null=False)
    endereco = models.CharField(max_length=500, null=False)
    telefone = models.CharField(max_length=25)
    whatsapp = models.CharField(max_length=25)
    cpf = models.CharField(max_length=15, null=False)
    senha = models.CharField(max_length=24, null=False)

    profissao = models.CharField(max_length=250, choices=(('MANICURE','MANICURE'),('MAQUIADORA','MAQUIADORA')))
    especialidades = models.CharField(max_length=250, choices=(('Unha Acrigel','Unha Acrigel'),('Maquiagem Casamento', 'Maquiagem Casamento')))

    instagram = models.CharField(max_length=500, null=True)
    facebook = models.CharField(max_length=500, null=True)

class Agenda(models.Model):
    id_profissional = models.IntegerField()
    data = models.DateField(null=True)
    hora = models.CharField(max_length=4, null=True)
    status = models.BooleanField(default=True)

class Atendimentos(models.Model):
    id_cliente = models.IntegerField()
    id_profissional = models.IntegerField()
    id_agenda = models.IntegerField()

    cidade_atendimento = models.CharField(max_length=500)
    valor = models.DecimalField(decimal_places=2, max_digits=6)
    status = models.BooleanField()

    msg = models.CharField(max_length=100)

    dt_atualizacao = models.DateTimeField()
    dt_fim = models.DateTimeField()
