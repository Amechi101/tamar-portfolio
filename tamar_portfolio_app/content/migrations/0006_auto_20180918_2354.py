# Generated by Django 2.1 on 2018-09-18 23:54

import cloudinary.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0005_auto_20180918_2313'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArtworkDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', cloudinary.models.CloudinaryField(max_length=255, null=True, verbose_name='Artwork Image')),
                ('name', models.CharField(max_length=255, null=True, verbose_name='Artwork Name')),
                ('location', models.CharField(blank=True, max_length=255, null=True, verbose_name='Artwork Location')),
                ('material', models.CharField(blank=True, max_length=255, null=True, verbose_name='Artwork Material')),
                ('dimensions', models.CharField(blank=True, max_length=255, null=True, verbose_name='Artwork Dimensions')),
            ],
            options={
                'verbose_name_plural': 'Artwork Details',
                'ordering': ['-artwork_year'],
                'verbose_name': 'Artwork Detail',
            },
        ),
        migrations.CreateModel(
            name='ArtworkYear',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('modified', models.DateTimeField(auto_now=True, null=True)),
                ('cover_title', models.CharField(help_text='Title that summarizes your year of artwork.', max_length=255, null=True, verbose_name='Cover Title')),
                ('year', models.PositiveSmallIntegerField(choices=[(2000, '2000'), (2001, '2001'), (2002, '2002'), (2003, '2003'), (2004, '2004'), (2005, '2005'), (2006, '2006'), (2007, '2007'), (2008, '2008'), (2009, '2009'), (2010, '2010'), (2011, '2011'), (2012, '2012'), (2013, '2013'), (2014, '2014'), (2015, '2015'), (2016, '2016'), (2017, '2017'), (2018, '2018'), (2019, '2019'), (2020, '2020'), (2021, '2021'), (2022, '2022'), (2023, '2023'), (2024, '2024'), (2025, '2025'), (2026, '2026'), (2027, '2027'), (2028, '2028'), (2029, '2029'), (2030, '2030'), (2031, '2031'), (2032, '2032'), (2033, '2033'), (2034, '2034'), (2035, '2035'), (2036, '2036'), (2037, '2037'), (2038, '2038'), (2039, '2039'), (2040, '2040'), (2041, '2041'), (2042, '2042'), (2043, '2043'), (2044, '2044'), (2045, '2045'), (2046, '2046'), (2047, '2047'), (2048, '2048'), (2049, '2049'), (2050, '2050'), (2051, '2051'), (2052, '2052'), (2053, '2053'), (2054, '2054'), (2055, '2055'), (2056, '2056'), (2057, '2057'), (2058, '2058'), (2059, '2059'), (2060, '2060'), (2061, '2061'), (2062, '2062'), (2063, '2063'), (2064, '2064'), (2065, '2065'), (2066, '2066'), (2067, '2067'), (2068, '2068')], help_text='The year your artworks will be referenced too.', null=True, verbose_name='Year')),
                ('cover_image', cloudinary.models.CloudinaryField(help_text='Cover image that encompasses your year of artwork.', max_length=255, null=True, verbose_name='Cover Image')),
                ('is_active', models.BooleanField(default=True, verbose_name='Active?')),
            ],
            options={
                'verbose_name_plural': 'Artwork Years',
                'verbose_name': 'Artwork Year',
            },
        ),
        migrations.RemoveField(
            model_name='yearlyartworkdetail',
            name='yearly_artwork',
        ),
        migrations.DeleteModel(
            name='YearlyArtwork',
        ),
        migrations.DeleteModel(
            name='YearlyArtworkDetail',
        ),
        migrations.AddField(
            model_name='artworkdetail',
            name='artwork_year',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='years', to='content.ArtworkYear', verbose_name='Artwork Year'),
        ),
    ]