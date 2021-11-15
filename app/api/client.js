import {create} from 'apisauce'

const apiClient = create({
    baseURL: "http://172.18.112.65:5000/api/",
    headers: { 
        "Accept": 'application/json',
        "Content-Type": 'application/json' 
    }
});

export default apiClient;
