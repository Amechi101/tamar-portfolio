from django.urls import include, path
from django.contrib import admin
from django.views.generic.base import TemplateView
from .views import HomePageView


urlpatterns = [
    
    # ADMIN
    path('admin/', admin.site.urls),

    # HOMEPAGE
    path('', HomePageView.as_view(), name='home'),

    # Content
    path('', include('content.urls')),

]
