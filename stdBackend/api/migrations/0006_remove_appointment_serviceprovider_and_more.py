# Generated by Django 4.0.4 on 2022-06-04 16:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_appointment_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='serviceProvider',
        ),
        migrations.AddField(
            model_name='appointment',
            name='serviceProvider',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.serviceprovider'),
        ),
    ]
