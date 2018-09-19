from django.views.generic import ListView

from .models import ArtworkYear, CurriculumVitaeCatgories

class HomePageView(ListView):

	model =  ArtworkYear

	template_name = 'homepage/home.html'

	def get_context_data(self, **kwargs):
		kwargs['artwork_year_list'] = ArtworkYear.objects.all().prefetch_related('years')
		kwargs['cv_list'] = CurriculumVitaeCatgories.objects.all().prefetch_related('categories')

		return super().get_context_data(**kwargs)

