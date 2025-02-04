from django.shortcuts import render

from rest_framework import generics
from testapp.models import Employee
from testapp.serializers import EmployeeSerializer
#from testapp.pagination import MyPagination,MyPagination2,MyPagination3
# Create your views here.
class EmployeeListView(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    search_fields =('=eno',)
    ordering_fields = ('eno','ename')
    #pagination_class = MyPagination3
    # def get_queryset(self):
    #     qs = Employee.objects.all()
    #     name = self.request.GET.get('ename')
    #     if name is not None:
    #         qs = qs.filter(ename__icontains=name)
    #     return qs
