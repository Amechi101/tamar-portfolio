from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import python_2_unicode_compatible

from cloudinary.models import CloudinaryField

from .abstract_models import TimeModel

YEARS = [ ( x, _( str(x) ) ) for x in range(2000, 2069) ]


@python_2_unicode_compatible
class ArtworkYear(TimeModel):
	"""
	Yearly Summary Of Artwork

	"""

	cover_title = models.CharField(max_length=255, null=True, blank=False, verbose_name='Cover Title', help_text='Title that summarizes your year of artwork.')

	year = models.PositiveSmallIntegerField( choices=YEARS, null=True, blank=False, verbose_name='Year', 
		help_text='The year your artworks will be referenced too.')
    
	cover_image = CloudinaryField('Cover Image', null=True, blank=False, 
		help_text='Cover image that encompasses your year of artwork. The maximum image size is 10 MB' )

	is_active = models.BooleanField(_('Active'), default=True, help_text='Check means active / Uncheck means unactive')

	def __str__(self):
		return "{0}".format(self.year)

	# Metadata
	class Meta: 
		verbose_name = _('Artwork Year')
		
		verbose_name_plural = _('Artwork Years')

		ordering = ['-year']


@python_2_unicode_compatible
class ArtworkDetail(models.Model):
	"""
	Artwork Detail for (single piece of artwork)

	"""

	artwork_year = models.ForeignKey(ArtworkYear, verbose_name='Artwork Year', on_delete=models.CASCADE,  null=True, blank=False, related_name='years')

	name = models.CharField(max_length=255, null=True, blank=False, verbose_name='Artwork Name' )

	show_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Artwork Show' )

	location = models.CharField(max_length=255, null=True, blank=True, verbose_name='Artwork Location' )

	material = models.CharField(max_length=255, null=True, blank=True, verbose_name='Artwork Material' )

	dimensions = models.CharField(max_length=255, null=True, blank=True, verbose_name='Artwork Dimensions' )

	image = CloudinaryField('Artwork Image', null=True, blank=True,
	help_text='Maximum image size is 10 MB' )

	video = CloudinaryField('Artwork Video', null=True, blank=True, resource_type='video', 
		help_text='Maximum video size is 100 MB and accepted video types are mp4, webm, ogg, avi' )


	def __str__(self):
		return "{0} - {1}".format( self.artwork_year, self.name )

	@property
	def has_show_name(self):
		return self.show_name is not None and self.show_name.strip() != ''

	@property
	def has_location(self):
		return self.location is not None and self.location.strip() != ''

	@property
	def has_material(self):
		return self.material is not None and self.material.strip() != ''

	@property
	def has_dimensions(self):
		return self.dimensions is not None and self.dimensions.strip() != ''
	

	# Metadata
	class Meta: 
		verbose_name = _('Artwork Detail')
		
		verbose_name_plural = _('Artwork Details')



@python_2_unicode_compatible
class CurriculumVitaeCatgories(TimeModel):
	"""
	CV Categories for work resume

	"""

	CV_CHOICES = [ 
		( 'Solo Exhibitions', _( 'Solo Exhibitions' ) ),
		( 'Selected Group Exhibitions', _( 'Selected Group Exhibitions' ) ),
		( 'Press/Publications', _( 'Press/Publications' ) ),
		( 'Artist Books/Catalogs', _( 'Artist Books/Catalogs' ) )
	]

	category = models.CharField(max_length=255, choices=CV_CHOICES, null=True, blank=False, verbose_name='CV Category')


	def __str__(self):
		return "{0}".format(self.category)

	# Metadata
	class Meta: 
		verbose_name = _('Curriculum Vitae')
		
		verbose_name_plural = _('Curriculum Vitae Information')



@python_2_unicode_compatible
class CurriculumVitaeDetail(models.Model):
	"""
	CV Detail for work resume

	"""

	cv_categories = models.ForeignKey(CurriculumVitaeCatgories, verbose_name='CV Title', on_delete=models.CASCADE,  null=True, blank=False, related_name='categories')

	year = models.PositiveSmallIntegerField( choices=YEARS, null=True, blank=True, verbose_name=' Work Year')

	description = models.TextField(max_length=1000, null=True, blank=True, verbose_name=' Work Description')


	def __str__(self):
		return "{0} - {1}".format( self.cv_categories, self.year )

	# Metadata
	class Meta: 
		verbose_name = _('CV Detail')
		
		verbose_name_plural = _('CV Details')
