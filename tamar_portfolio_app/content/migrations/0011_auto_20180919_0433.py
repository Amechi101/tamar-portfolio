# Generated by Django 2.1 on 2018-09-19 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0010_auto_20180919_0432'),
    ]

    operations = [
        migrations.AlterField(
            model_name='curriculumvitaecatgories',
            name='category',
            field=models.CharField(choices=[('Solo Exhibitions', 'Solo Exhibitions'), ('Selected Group Exhibitions', 'Selected Group Exhibitions'), ('Press/Publications', 'Press/Publications'), ('Artist Books/Catalogs', 'Artist Books/Catalogs')], max_length=255, null=True, verbose_name='CV Category'),
        ),
    ]
