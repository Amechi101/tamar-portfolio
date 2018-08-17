from django.contrib import admin

from .models import Work


@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
	
	readonly_fields = ['slug',]

	list_display = ['title',]

	search_fields = ['title',]


# @admin.register(ProductImage)
# class ProductImageAdmin(admin.ModelAdmin):
#     list_display = ('get_brand_name', 'get_product_name', 'is_active')
#     search_fields = ['product__name',]
#     def get_product_name(self, obj):
#     	return obj.product.name

#     def get_brand_name(self, obj):
#     	return obj.brand.name

#     get_brand_name.short_description = 'Brand Name'
#     get_product_name.short_description = 'Product Name'	



