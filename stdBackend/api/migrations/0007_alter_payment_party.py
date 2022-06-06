# Generated by Django 4.0.4 on 2022-06-05 08:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_appointment_serviceprovider_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='party',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payment', to='api.party'),
        ),
    ]
