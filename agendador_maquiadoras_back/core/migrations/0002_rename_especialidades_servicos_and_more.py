# Generated by Django 4.2 on 2023-09-19 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(old_name="Especialidades", new_name="Servicos",),
        migrations.AddField(
            model_name="profissional",
            name="especialidades",
            field=models.CharField(max_length=500, null=True),
        ),
    ]
