# Generated by Django 4.2 on 2023-09-19 14:04

import datetime
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Agenda",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("data", models.DateField(null=True)),
                ("hora", models.CharField(max_length=4, null=True)),
                ("livre", models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name="Cliente",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=250)),
                ("endereco", models.CharField(max_length=500)),
                ("telefone", models.CharField(max_length=25)),
                ("whatsapp", models.CharField(max_length=25)),
                ("email", models.CharField(max_length=100, unique=True)),
                ("senha", models.CharField(max_length=24)),
            ],
        ),
        migrations.CreateModel(
            name="Profissional",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=250)),
                ("cpf", models.CharField(max_length=15, unique=True)),
                ("senha", models.CharField(max_length=24)),
                ("email", models.CharField(max_length=100)),
                ("foto", models.CharField(max_length=250)),
                ("endereco", models.CharField(max_length=500)),
                ("profissao", models.CharField(max_length=250)),
                ("telefone", models.CharField(max_length=25)),
                ("whatsapp", models.CharField(max_length=25)),
                ("instagram", models.CharField(max_length=500, null=True)),
                ("facebook", models.CharField(max_length=500, null=True)),
                ("estrelas", models.IntegerField()),
                ("qtd_atds", models.IntegerField()),
                ("dt_cadastro", models.DateField(default=datetime.date(2023, 9, 19))),
            ],
        ),
        migrations.CreateModel(
            name="Especialidades",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("ativo", models.BooleanField(default=True)),
                ("especialidade", models.CharField(max_length=250, null=True)),
                (
                    "preco",
                    models.DecimalField(decimal_places=2, max_digits=10, null=True),
                ),
                (
                    "profissional",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.profissional",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Atendimentos",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("cidade_atendimento", models.CharField(max_length=500)),
                ("valor", models.DecimalField(decimal_places=2, max_digits=6)),
                ("msg", models.CharField(max_length=100)),
                (
                    "dt_created",
                    models.DateTimeField(
                        default=django.utils.timezone.now, editable=False
                    ),
                ),
                (
                    "dt_atualizacao",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("cocncluido", models.BooleanField(default=False)),
                (
                    "agenda",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.agenda"
                    ),
                ),
                (
                    "cliente",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="core.cliente"
                    ),
                ),
                (
                    "profissional",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="profissionais",
                        to="core.profissional",
                    ),
                ),
                (
                    "servicos",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.especialidades",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="agenda",
            name="profissional",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="core.profissional"
            ),
        ),
        migrations.AlterUniqueTogether(
            name="agenda", unique_together={("data", "hora")},
        ),
    ]
