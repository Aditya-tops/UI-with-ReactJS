from django.shortcuts import render
from django.views.generic import View,TemplateView
from django.http import HttpResponse
# Create your views here.
class HelloWorldView(View):
    def get(self,request):
        return HttpResponse('<h1>This response is from class based view</h1>')

class TemplateCBV(TemplateView):
    template_name = 'testapp/results.html'
    
