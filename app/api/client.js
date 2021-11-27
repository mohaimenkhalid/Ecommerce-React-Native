import {create} from 'apisauce'

const apiClient = create({
    baseURL: "http://172.18.16.177:5000/api/",
    headers: { 
        "Accept": 'application/json',
        "Content-Type": 'application/json' 
    }
});

export default apiClient;
