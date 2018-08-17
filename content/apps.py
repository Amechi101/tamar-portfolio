from django.apps import AppConfig

class Content(AppConfig):
    name = 'content'
    verbose_name = "Content"

    def ready(self):
    	pass
        