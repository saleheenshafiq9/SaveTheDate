# Generated by Django 4.0.4 on 2022-05-07 08:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_providerimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='FoodItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('unitPrice', models.DecimalField(decimal_places=2, max_digits=11)),
                ('catering', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='api.catering')),
            ],
        ),
        migrations.CreateModel(
            name='FoodImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='api/foodimage')),
                ('fooditem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.fooditem')),
            ],
        ),
    ]