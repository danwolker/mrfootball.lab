# Generated by Django 5.1.7 on 2025-03-24 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_line_soccerboot_alter_order_chuteira'),
    ]

    operations = [
        migrations.AddField(
            model_name='soccerboot',
            name='image',
            field=models.ImageField(null=True, upload_to='soccer_boots/'),
        ),
    ]
