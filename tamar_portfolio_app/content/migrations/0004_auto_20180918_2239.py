# Generated by Django 2.1 on 2018-09-18 22:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0003_auto_20180918_2143'),
    ]

    operations = [
        migrations.CreateModel(
            name='YearlyArtworkDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primary_name', models.CharField(max_length=255, null=True, verbose_name='Artwork Name')),
                ('location', models.CharField(blank=True, max_length=255, null=True, verbose_name='Artwork Location')),
                ('material', models.CharField(blank=True, max_length=255, null=True, verbose_name='Artwork Material')),
                ('dimensions', models.CharField(blank=True, max_length=255, null=True, verbose_name='Artwork Dimensions')),
            ],
            options={
                'verbose_name': 'Artwork Detail',
                'verbose_name_plural': 'Artwork Details',
            },
        ),
        migrations.AddField(
            model_name='yearlyartwork',
            name='is_active',
            field=models.BooleanField(default=True, verbose_name='Active'),
        ),
        migrations.AddField(
            model_name='yearlyartworkdetail',
            name='yearly_artwork',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='content.YearlyArtwork'),
        ),
    ]
