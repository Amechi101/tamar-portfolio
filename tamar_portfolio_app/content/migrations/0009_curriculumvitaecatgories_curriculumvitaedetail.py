# Generated by Django 2.1 on 2018-09-19 04:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0008_auto_20180919_0322'),
    ]

    operations = [
        migrations.CreateModel(
            name='CurriculumVitaeCatgories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('modified', models.DateTimeField(auto_now=True, null=True)),
                ('category', models.CharField(choices=[(0, 'Solo Exhibitions'), (1, 'Selected Group Exhibitions'), (2, 'Press/Publications'), (3, 'Artist Books/Catalogs'), (4, 'Galleries'), (5, 'Collections')], max_length=255, null=True, verbose_name='CV Category')),
            ],
            options={
                'verbose_name': 'CV Category',
                'verbose_name_plural': 'CV Categories',
            },
        ),
        migrations.CreateModel(
            name='CurriculumVitaeDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.PositiveSmallIntegerField(choices=[(2000, '2000'), (2001, '2001'), (2002, '2002'), (2003, '2003'), (2004, '2004'), (2005, '2005'), (2006, '2006'), (2007, '2007'), (2008, '2008'), (2009, '2009'), (2010, '2010'), (2011, '2011'), (2012, '2012'), (2013, '2013'), (2014, '2014'), (2015, '2015'), (2016, '2016'), (2017, '2017'), (2018, '2018'), (2019, '2019'), (2020, '2020'), (2021, '2021'), (2022, '2022'), (2023, '2023'), (2024, '2024'), (2025, '2025'), (2026, '2026'), (2027, '2027'), (2028, '2028'), (2029, '2029'), (2030, '2030'), (2031, '2031'), (2032, '2032'), (2033, '2033'), (2034, '2034'), (2035, '2035'), (2036, '2036'), (2037, '2037'), (2038, '2038'), (2039, '2039'), (2040, '2040'), (2041, '2041'), (2042, '2042'), (2043, '2043'), (2044, '2044'), (2045, '2045'), (2046, '2046'), (2047, '2047'), (2048, '2048'), (2049, '2049'), (2050, '2050'), (2051, '2051'), (2052, '2052'), (2053, '2053'), (2054, '2054'), (2055, '2055'), (2056, '2056'), (2057, '2057'), (2058, '2058'), (2059, '2059'), (2060, '2060'), (2061, '2061'), (2062, '2062'), (2063, '2063'), (2064, '2064'), (2065, '2065'), (2066, '2066'), (2067, '2067'), (2068, '2068')], null=True, verbose_name=' Work Year')),
                ('description', models.TextField(max_length=1000, null=True, verbose_name=' Work Description')),
                ('cv_categories', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='content.CurriculumVitaeCatgories', verbose_name='CV Title')),
            ],
            options={
                'verbose_name': 'CV Detail',
                'verbose_name_plural': 'CV Details',
            },
        ),
    ]
