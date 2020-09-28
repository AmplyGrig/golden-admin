import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://165.232.65.160:8080/api/admin',
    headers: {
        // 'Authorization': {
        //     toString() {
        //         return `Bearer ${localStorage.getItem('token')}`
        //     }
        // },
        'Content-Type': 'multipart/form-data',
    },
});

export default instance
