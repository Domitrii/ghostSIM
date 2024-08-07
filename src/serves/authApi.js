import axios from "axios";

const BASE_URL = "https://node-beginer-tests.onrender.com"

export const instance = axios.create({
    baseURL: BASE_URL,
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const removeToken = () => {
    instance.defaults.headers.common.Authorization = ``
}

export const requestSignUp = async (formData) => {
    console.log('data')
    const {data} = await instance.post('/api/users/register', formData)
    console.log('data, end')
    return data;
}

export const requestLogIn = async (formData) => {
    console.log(formData)
    const {data} = await instance.post('/api/users/login', formData)
    setToken(data.token)
    return data;
}

export const requestLogOut = async () => {
    const {data} = await instance.post('/api/user/logout')
    console.log(data)
    return data
}
