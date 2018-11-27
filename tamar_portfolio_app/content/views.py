from django.views.generic import TemplateView, DetailView

from .models import ArtworkYear, ArtworkDetail, CurriculumVitaeCatgories, Gallery, Collection, GeneralInformation

class HomePageView(TemplateView):

	template_name = 'homepage/home.html'

	def get_context_data(self, **kwargs):

		kwargs['artwork_year_list'] = ArtworkYear.objects.all()

		return super().get_context_data(**kwargs)


class AboutPageView(TemplateView):

	template_name = 'pages/about.html'

	def get_context_data(self, **kwargs):

		kwargs['cv_list'] = CurriculumVitaeCatgories.objects.all().prefetch_related('categories')
		kwargs['galleries'] = Gallery.objects.all()
		kwargs['collections'] = Collection.objects.all()

		return super().get_context_data(**kwargs)


class ArtWorkDetailView(DetailView):

	model = ArtworkYear

	template_name = 'artwork/artwork-detail.html'

	def get_context_data(self, **kwargs):

		artwork_obj = self.get_object()

		kwargs['artwork_year_list'] = ArtworkYear.objects.all().exclude(year=artwork_obj.year)

		kwargs['artwork_year'] = artwork_obj

		kwargs['artworks'] = ArtworkDetail.objects.filter(artwork_year=artwork_obj)

		return super().get_context_data(**kwargs)

