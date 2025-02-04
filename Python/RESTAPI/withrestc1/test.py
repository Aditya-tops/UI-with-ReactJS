import requests,json,time
BASE_URL = 'http://127.0.0.1:8000/'
ENDPOINT = 'api/'
print('get request')
def get_resource(id = None):
    data = {}
    if id is not None:
        data = {
        'id':id
        }
    resp = requests.get(BASE_URL + ENDPOINT, data=json.dumps(data))
    print(resp.status_code)
    print(resp.json())
get_resource()
time.sleep(5)
print('post request')
def create_resource():
    new_emp = {
    'eno':105,
    'ename':'Kareena',
    'esal':18000,
    'eaddr':'Bng'
    }
    resp = requests.post(BASE_URL + ENDPOINT, data=json.dumps(new_emp))
    print(resp.status_code)
    print(resp.json())
create_resource()
time.sleep(15)
print('update record...')
def update_resource(id=None):
    new_emp = {
    'id':id,
    'ename':'Deepika',
    'esal':28000,
    }
    resp = requests.put(BASE_URL + ENDPOINT, data=json.dumps(new_emp))
    print(resp.status_code)
    print(resp.json())
update_resource(2)
time.sleep(15)
print('delete operation')
def delete_resource(id=None):
    data = {
    'id':id,
    }
    resp = requests.delete(BASE_URL + ENDPOINT,data = json.dumps(data))
    print(resp.status_code)
    print(resp.json())
delete_resource(2)
