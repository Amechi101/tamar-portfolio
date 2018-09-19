from django.apps import AppConfig

class ContentConfig(AppConfig):
    name = 'tamar_portfolio_app.content'
    verbose_name = "Content"

    def ready(self):
    	pass
        