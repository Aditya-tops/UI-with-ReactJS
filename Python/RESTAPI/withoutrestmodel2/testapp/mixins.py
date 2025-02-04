from django.http import HttpResponse
class HttpResponseMixin(object):
    def render_to_http_response(self,json_data,status=200):
        return HttpResponse(json_data,content_type='application/json',status=status)

from django.core.serializers import serialize
import json
class SerializeMixin(object):
    def serialize(self,qs):
        json_data = serialize('json',qs)
        pdict = json.loads(json_data)
        final_list = []
        for obj in pdict:
            std_data = obj['fields']
            final_list.append(std_data)
        json_data = json.dumps(final_list)
        return json_data
