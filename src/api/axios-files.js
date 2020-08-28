import axios from 'axios'

const instance = axios.create({
    baseURL: '',
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
