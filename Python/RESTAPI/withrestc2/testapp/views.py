from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
from testapp.serializers import NameSerializer
from rest_framework.viewsets import ViewSet
class TestViewSet(ViewSet):
    def list(self,request):
        colors = ['RED','YELLOW','GREEN','BLUE']
        return Response({'msg':'Happy sriram navami.......','colors':colors})

    def retrieve(self,request,pk=None):
        return Response({'msg':'This response from RETRIEVE method ViewSet'})
    def update(self,request,pk=None):
        return Response({'msg':'This response from UPDATE method ViewSet'})
    def partial_update(self,request,pk=None):
        return Response({'msg':'This response from PARTIAL_UPDATE method ViewSet'})
    def destroy(self,request,pk=None):
        return Response({'msg':'This response from DESTROY method ViewSet'})








class TestAPIView(APIView):
    def get(self,request,*args,**kwargs):
        colors = ['RED','YELLOW','GREEN','BLUE']
        return Response({'msg':'Happy valentines day....','colors':colors})#Response class is responsible to convert python dict to json_data
    def post(self,request,*args,**kwargs):
        serializer = NameSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            msg = 'Hello {}, Happy New Year...'.format(name)
            return Response({'msg':msg})
        else:
            return Response(serializer.errors,status=400)
    def put(self,request,*args,**kwargs):
        return Response({'msg':'This response from PUT method APIView'})
    def delete(self,request,*args,**kwargs):
        return Response({'msg':'This response from DELETE method APIView'})
    def patch(self,request,*args,**kwargs):
        return Response({'msg':'This response from PATCH method APIView'})
