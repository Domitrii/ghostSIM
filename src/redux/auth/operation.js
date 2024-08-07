import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestLogIn, requestLogOut, requestSignUp, setToken } from "../../serves/authApi";




export const apiRegisterUser = createAsyncThunk(
    'auth/register',
    async (formData, thunkApi) => {
        try{
            const data = await requestSignUp(formData)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const apiLogInUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkApi) => {
        try{
            const data = await requestLogIn(formData)
            return data;
        }catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    } 
)

export const apiLogOutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try{
            console.log('logOut')
            await requestLogOut()
            setToken(null)
            return
        }catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    } 
)



