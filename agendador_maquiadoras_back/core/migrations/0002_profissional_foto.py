# Generated by Django 4.2 on 2023-09-03 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="profissional",
            name="foto",
            field=models.CharField(default="", max_length=250),
            preserve_default=False,
        ),
    ]
