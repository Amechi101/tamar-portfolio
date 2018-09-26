from django.contrib import admin

from .models import (ArtworkYear, ArtworkDetail, CurriculumVitaeCatgories, CurriculumVitaeDetail, Gallery, Collection, GeneralInformation)

class ArtworkDetailInline(admin.StackedInline):
    model = ArtworkDetail

class CurriculumVitaeDetailInline(admin.StackedInline):
	model = CurriculumVitaeDetail
		

@admin.register(ArtworkYear)
class  ArtworkYearAdmin(admin.ModelAdmin):

	list_display = ['cover_title', 'year']

	search_fields = ['year',]

	inlines = [ArtworkDetailInline]


@admin.register(CurriculumVitaeCatgories)
class  CurriculumVitaeCatgoriesAdmin(admin.ModelAdmin):

	list_display = ['category',]

	search_fields = ['category',]

	inlines = [CurriculumVitaeDetailInline]


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):

	list_display = ['name', 'location']

	search_fields = ['name',]


@admin.register(Collection)
class CollectionAdmin(admin.ModelAdmin):

	list_display = ['name',]

	search_fields = ['name',]


@admin.register(GeneralInformation)
class GeneralInformationAdmin(admin.ModelAdmin):

	list_display = ['pk', 'public_email']

# @admin.register(YearlyArtworkDetail)
# class  YearlyArtworkAdmin(admin.ModelAdmin):

# 	list_display = ['yearly_artwork', 'primary_name']

# 	search_fields = ['primary_name']

	# def get_yearly_artwork_year(self, obj):
	# 	return obj.yearly_artwork.year

	# get_yearly_artwork_year.short_description = 'Artwork Year'




