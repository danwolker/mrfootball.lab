# Generated by Django 5.1.7 on 2025-04-14 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_order_payment_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='color',
            name='color_code',
            field=models.CharField(max_length=50),
        ),
    ]
