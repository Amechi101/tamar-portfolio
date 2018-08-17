from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse, reverse_lazy

from django.views.generic import (TemplateView, CreateView, DeleteView, DetailView, ListView, UpdateView)

from .models import Work


class WorkDetailView(DetailView):

    model = Work
    
    template_name = 'work/work_detail.html'

    def get_context_data(self, **kwargs):

    	work = self.get_object()

    	kwargs['work_obj'] = work

    	return super().get_context_data(**kwargs)

