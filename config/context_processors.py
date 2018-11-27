import cloudinary

from django.contrib.sites.models import Site
from tamar_portfolio_app.content.models import ArtworkYear, GeneralInformation

def site_processor(request):

    general_information_obj = {}
    general_information_fields = GeneralInformation.objects.filter(id=1).values()

    for fields in general_information_fields:
        general_information_obj['public_email'] = fields['public_email']
        general_information_obj['about_description'] = fields['about_description']
        general_information_obj['google_analytics_code'] = fields['google_analytics']
        general_information_obj['instagram_handle'] = fields['instagram_handle']
        general_information_obj['instagram_url'] = fields['instagram_url']
    
    return { 
        'public_email': general_information_obj['public_email'],
        'instagram_url': general_information_obj['instagram_url'],
        'instagram_handle': general_information_obj['instagram_handle'],
        'about_description': general_information_obj['about_description'],
        'google_analytics_code': general_information_obj['google_analytics_code'],
        'artwork_years': ArtworkYear.objects.all(),
        'site': Site.objects.get_current() 
    }


def consts(request):
    return dict(
        GENERAL_IMAGES = dict(
            transformation=[
                dict(
                    crop="fit", 
                    quality="auto",
                    width=1000
                )
            ]
        ),
    )