from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse, reverse_lazy

from django.views.generic import (TemplateView, CreateView, DeleteView, DetailView, ListView, UpdateView)

from content.models import Work


class HomePageView(ListView):

	model = Work

	template_name = 'pages/home.html'

	def get_context_data(self, **kwargs):
		kwargs['works'] = Work.objects.all().order_by('-created')

		return super().get_context_data(**kwargs)
