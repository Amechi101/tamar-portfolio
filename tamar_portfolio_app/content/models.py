from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import python_2_unicode_compatible
from django.template.defaultfilters import slugify

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

	slug = models.SlugField(_('Slug'), max_length=255, blank=True)

	def __str__(self):
		return "{0}".format(self.year)

	def get_absolute_url(self):
		return reverse('artworks:artwork_detail', args=[self.slug])

	def save(self, *args, **kwargs):
		self.slug = slugify(self.year)

		self.full_clean()

		super(ArtworkYear, self).save(*args, **kwargs)

	# Metadata
	class Meta: 
		verbose_name = _('Artwork')
		
		verbose_name_plural = _('Artworks')

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

	image = CloudinaryField('Artwork Image or Video', null=True, blank=True, resource_type='auto', 
		help_text='''
		- Maximum image size is 10 MB. \n\n 
		- Maximum video size is 100 MB. \n\n
		- All image and video formats are accepted.
		''' )


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

		ordering = ['id']



@python_2_unicode_compatible
class CurriculumVitaeCatgories(TimeModel):
	"""
	CV Category for work resume

	"""

	CV_CHOICES = [ 
		( 'Solo Exhibitions', _( 'Solo Exhibitions' ) ),
		( 'Two Person and Selected Group Exhibitions', _( 'Two Person and Selected Group Exhibitions' ) ),
		( 'Press/Publications', _( 'Press/Publications' ) ),
		( 'Artist Books/Catalogs', _( 'Artist Books/Catalogs' ) )
	]

	category = models.CharField(max_length=255, choices=CV_CHOICES, null=True, blank=False, verbose_name='CV Category')


	def __str__(self):
		return "{0}".format(self.category)

	# Metadata
	class Meta: 
		verbose_name = _('Curriculum Vitae')
		
		verbose_name_plural = _('Curriculum Vitae')



@python_2_unicode_compatible
class CurriculumVitaeDetail(models.Model):
	"""
	CV Detail for work

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



@python_2_unicode_compatible
class Gallery(TimeModel):
	"""
	Galleries around the world Tamar Halpern's artwork is located

	"""

	name = models.CharField(max_length=255, null=True, blank=False, verbose_name='Gallery Name')

	location = models.CharField(max_length=255, null=True, blank=False, verbose_name='Gallery Location')


	def __str__(self):
		return "{0}".format(self.name)

	# Metadata
	class Meta: 
		verbose_name = _('Gallery')
		verbose_name_plural = _('Galleries')



@python_2_unicode_compatible
class Collection(TimeModel):
	"""
	Famous collections associated with Tamar Halpern's work

	"""

	name = models.CharField(max_length=255, null=True, blank=False, verbose_name='Collection Name')


	def __str__(self):
		return "{0}".format(self.name)

	# Metadata
	class Meta: 
		verbose_name = _('Collection')
		verbose_name_plural = _('Collections')



@python_2_unicode_compatible
class GeneralInformation(models.Model):
	"""
	General Information about Tamar Halpern

	"""

	public_email = models.EmailField(max_length=200, null=True, blank=True, verbose_name='Email', help_text='Public facing contact email.')

	about_description = models.TextField(max_length=None, null=True, blank=True, verbose_name='About Description')

	google_analytics = models.CharField(max_length=255, null=True, blank=True, verbose_name='Google Analytics Code', 
		help_text="Paste your google analytics code here, ex: UA-XXXXXXXXX-X")

	def __str__(self):
		return "{0}".format(self.pk)

	# Metadata
	class Meta: 
		verbose_name = _('General Information')
		
		verbose_name_plural = _('General Information')