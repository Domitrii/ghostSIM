import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, requestLogIn, requestLogOut, requestSignUp, setToken, updateUser } from "../../serves/authApi";


export const apiRegisterUser = createAsyncThunk(
    'auth/register',
    async (formData, thunkApi) => {
        try{
            console.log('register')
            const data = await requestSignUp(formData)
            console.log('register end')
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const apiLogInUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkApi) => {
      try {
        const data = await requestLogIn(formData);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

export const apiLogOutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try{
            await requestLogOut()
            setToken(null)
            return
        }catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    } 
)

export const apiCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, thunkApi) => {
        try {
            const response = await getCurrentUser()
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const apiUpdateUser = createAsyncThunk(
    'auth/update',
    async (formData, thunkApi) => {
        try {
            const response = await updateUser(formData)
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
