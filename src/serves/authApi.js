import axios from "axios";
import { store } from "../redux/store";

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
    try {
        const {data} = await instance.post("/api/users/register", formData)
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const requestLogIn = async (formData) => {
    try{
        const { data } = await instance.post("/api/users/login", formData);
        setToken(data.token);
        return data;
    } catch(error) {
        return new Error(error.response?.data?.message || error.message || 'An error occurred')
    }
}

export const requestLogOut = async () => {
    try {
        setToken(store.getState().auth.token)
        const {data} = await instance.post('/api/users/logout')
        return data
    } catch (error){
        console.error('u have an error: ', error)
    }
}


export const getCurrentUser = async () => {
    try {
        setToken(store.getState().auth.token)
        const {data} = await instance.get('/api/users/current')
        return data
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async (formData) => {
    try {
        setToken(store.getState().auth.token)
        const {data} = await instance.post('/api/users/update', formData)
        return data
    } catch (error) {
        console.error(error)
    }
}