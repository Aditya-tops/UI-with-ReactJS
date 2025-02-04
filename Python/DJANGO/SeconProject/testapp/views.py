from django.shortcuts import render
from django.http import HttpResponse
import datetime
# Create your views here.
def time_info(request):
    date = datetime.datetime.now()
    msg = '<h1>Hello Friend Good Morning!!!!</h1><hr>'
    msg += '<h2>Now Server Time Is:'+str(date)+'</h2>'
    return HttpResponse(msg)
