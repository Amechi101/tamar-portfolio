from django.urls import path


from .views import HomePageView

urlpatterns = [

	# HOMEPAGE
    path('', HomePageView.as_view(), name='home'),

]


