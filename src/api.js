import axios from "axios"

export const API_URL = 'http://localhost:3000'

export function TOKEN_POST(body) {
    return axios.post(API_URL + '/auth/usuario', body)
}

export function TOKEN_VALIDATE_POST(token) {
    return axios.get(API_URL + '/auth/', token)
}

export function USER_GET(token){
    return axios.get(API_URL + '/auth/usuario', token)
}

export function USER_POST(body){
    return axios.post(API_URL + '/auth/usuario', body)
}

export function MEDIC_GET(token){
        return axios.get(API_URL + '/auth/medic', token)
}

export function MEDIC_POST(body){
    return axios.post(API_URL + '/auth/medic', body)

}