import {create} from 'apisauce'

const apiClient = create({
    baseURL: "http://192.168.54.49:5000/api/",
    headers: { 
        "Accept": 'application/json',
        "Content-Type": 'application/json' 
    }
});

export default apiClient;
