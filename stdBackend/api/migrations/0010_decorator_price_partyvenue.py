# Generated by Django 4.0.4 on 2022-06-06 05:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_progress_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='decorator',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=11, null=True),
        ),
        migrations.CreateModel(
            name='PartyVenue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('party', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='partyvenue', to='api.party')),
                ('venue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='partyvenue', to='api.venue')),
            ],
        ),
    ]