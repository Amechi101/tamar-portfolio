# Generated by Django 2.1 on 2018-11-23 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0036_auto_20181123_0412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generalinformation',
            name='public_email',
            field=models.EmailField(help_text='Public facing contact email.', max_length=200, null=True, verbose_name='Email'),
        ),
    ]
