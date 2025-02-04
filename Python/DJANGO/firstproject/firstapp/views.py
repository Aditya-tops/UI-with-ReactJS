from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def display(request):
    s = '<h1>Hello Students Welcome Naresh IT  Mahesh Sir Django CLasses</h1>'
    return HttpResponse(s)
