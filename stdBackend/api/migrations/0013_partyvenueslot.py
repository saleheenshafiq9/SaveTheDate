# Generated by Django 4.0.4 on 2022-05-28 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_venueslot'),
    ]

    operations = [
        migrations.CreateModel(
            name='PartyVenueSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='unconfirmed', max_length=255)),
                ('party', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.party')),
                ('venueslot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.venueslot')),
            ],
        ),
    ]
