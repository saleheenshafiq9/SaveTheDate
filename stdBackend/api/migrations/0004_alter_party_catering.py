# Generated by Django 4.0.4 on 2022-05-14 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_party_provider_party_catering'),
    ]

    operations = [
        migrations.AlterField(
            model_name='party',
            name='catering',
            field=models.ManyToManyField(to='api.catering'),
        ),
    ]