from django import template

register = template.Library()

@register.filter
def evenModulo( value ):
	return value % 2

