# Generated by Django 2.1 on 2018-10-28 23:49

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0022_generalinformation_google_analytics'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artworkdetail',
            name='image',
            field=cloudinary.models.CloudinaryField(blank=True, help_text='\n\t\t- Maximum image size is 10 MB \n \n\t\t- Maximum video size is 100 MB. \n\n\t\t- All image and video formats are accepted\n\t\t', max_length=255, null=True, verbose_name='Artwork Image or Video'),
        ),
    ]