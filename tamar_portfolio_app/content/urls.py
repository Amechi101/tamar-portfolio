from django.urls import path, include

from .views import ArtWorkDetailView

urlpatterns = [

    path('', include(([

        path('artwork/<slug:slug>', ArtWorkDetailView.as_view(), name='artwork_detail'),
   
    ], 'tamar_portfolio_app'), namespace='artworks')),
]


