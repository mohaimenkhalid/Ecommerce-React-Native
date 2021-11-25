import {create} from 'apisauce'

const apiClient = create({
    baseURL: "http://172.17.144.129:5000/api/",
    headers: { 
        "Accept": 'application/json',
        "Content-Type": 'application/json' 
    }
});

export default apiClient;
