from django.urls import include, path

from .views import WorkDetailView

urlpatterns = [

    path('work/', include(([

        path('<slug:slug>', WorkDetailView.as_view(), name='work_detail'),
   
    ], 'content'), namespace='work')),

]
