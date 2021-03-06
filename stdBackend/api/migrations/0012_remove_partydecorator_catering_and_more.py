# Generated by Django 4.0.4 on 2022-06-06 07:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_partydecorator'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='partydecorator',
            name='catering',
        ),
        migrations.AddField(
            model_name='partydecorator',
            name='decorator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='partydecorator', to='api.decorator'),
        ),
        migrations.AlterField(
            model_name='partydecorator',
            name='party',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='partydecorator', to='api.party'),
        ),
    ]
