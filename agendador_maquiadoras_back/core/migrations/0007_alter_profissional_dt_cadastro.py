# Generated by Django 4.2 on 2023-09-04 12:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0006_alter_profissional_dt_cadastro"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profissional",
            name="dt_cadastro",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]