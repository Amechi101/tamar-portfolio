from django.views.generic import TemplateView, DetailView

from .models import ArtworkYear, ArtworkDetail, CurriculumVitaeCatgories, Gallery, Collection, GeneralInformation

class HomePageView(TemplateView):

	template_name = 'homepage/home.html'

	def get_context_data(self, **kwargs):

		kwargs['public_email'] = None
		kwargs['about_description'] = None
		kwargs['google_analytics_code'] = None
		general_information_fields = GeneralInformation.objects.filter(id=1).values()

		for obj in general_information_fields:

			kwargs['public_email'] = obj['public_email']
			kwargs['about_description'] = obj['about_description']
			kwargs['google_analytics_code'] = obj['google_analytics']

		kwargs['collections'] = Collection.objects.all()
		kwargs['galleries'] = Gallery.objects.all()
		kwargs['artwork_year_list'] = ArtworkYear.objects.all()
		kwargs['cv_list'] = CurriculumVitaeCatgories.objects.all().prefetch_related('categories')

		return super().get_context_data(**kwargs)



class ArtWorkDetailView(DetailView):

	model = ArtworkYear

	template_name = 'artwork/artwork-detail.html'

	def get_context_data(self, **kwargs):

		artwork_obj = self.get_object()

		kwargs['artwork_year_list'] = ArtworkYear.objects.all()

		kwargs['artwork_year'] = artwork_obj

		kwargs['artworks'] = ArtworkDetail.objects.filter(artwork_year=artwork_obj)

		return super().get_context_data(**kwargs)

