from django.shortcuts import render
from django.views.generic import View
from testapp.utils import is_json
from testapp.mixins import HttpResponseMixin,SerializeMixin
import json
from testapp.models import Student
# Create your views here.
class StudentCRUDCBV(SerializeMixin,HttpResponseMixin,View):
    def get_object_id(self,id):
        try:
            s = Student.objects.get(id=id)
        except Student.DoesNotExist:
            s = None
        return s

    def get(self,request,*args,**kwargs):
        data = request.body
        valid_json = is_json(data)
        if not valid_json:
            return self.render_to_http_response(json.dumps({'msg':'Please provide valid json data only'}),status=400)
        pdata = json.loads(data)
        id = pdata.get('id',None)
        if id is not None:
            std = self.get_object_id(id)
            if std is None:
                return self.render_to_http_response(json.dumps({'msg':'No matched record found with matched id'}),status=400)
            json_data = self.serialize([std,])
            return self.render_to_http_response(json_data)
        qs = Student.objects.all()
        json_data = self.serialize(qs)
        return self.render_to_http_response(json_data)
