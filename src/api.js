import axios from "axios"

 const api = axios.create({
    baseURL: 'http://localhost:3000'
});

api.interceptors.request.use(async (config) => {
    try {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    } catch (err){
        console.log(err)
    }
})

export default api

// export function TOKEN_POST(body) {
//     return axios.post(API_URL + '/auth/usuario', body)
// }

// export function TOKEN_VALIDATE_POST(token) {
//     return axios.get(API_URL + '/auth/', token)
// }

// export function USER_GET(token){
//     return axios.get(API_URL + '/auth/usuario', token)
// }

// export function USER_POST(body){
//     return axios.post(API_URL + '/auth/usuario', body)
// }

// export function MEDIC_GET(token){
//         return axios.get(API_URL + '/auth/medic', token)
// }

// export function MEDIC_POST(body){
//     return axios.post(API_URL + '/auth/medic', body)
// }

// export function USER_CONSULT(body){
//     return axios.post(API_URL + '/registerAgendamento/', body)
// }