# Generated by Django 5.1.7 on 2025-04-09 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_bootincart_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='bootincart',
            name='ammount',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
