from django.db import models
from django.template.defaultfilters import slugify
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import python_2_unicode_compatible
from django.urls import reverse

from cloudinary.models import CloudinaryField

from .abstract_models import TimeModel


@python_2_unicode_compatible
class Work(TimeModel):

	title = models.CharField(max_length=255, null=True, blank=False, verbose_name='Title', help_text='Title that summarizes the year of work.')

	year = models.PositiveSmallIntegerField( null=True, blank=False, verbose_name='Year', help_text='Year of work')
    
	cover_image = CloudinaryField('Cover Image', null=True, blank=True, help_text='Cover image of work' )

	slug = models.SlugField(_('Slug'), max_length=255, unique=True, blank=True)


	def __str__(self):
		return "{0}".format(self.title)

	def get_absolute_url(self):
		return reverse('work:work_detail', args=[self.slug])

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)

		self.full_clean()

		super(Brand, self).save(*args, **kwargs)

	# Metadata
	class Meta: 
		verbose_name = _('Work')
		verbose_name_plural = _('Works')

