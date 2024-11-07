import { createAsyncThunk } from "@reduxjs/toolkit";
import { dailyRecord, monthlyRecord, addWaterRecord, updateWaterRecord, deleteWaterRecord } from "../../serves/waterApi";

export const apiDailyRecord = createAsyncThunk(
    'track/daily',
    async (query, thunkApi) => {
        try {
            const {data} = await dailyRecord(query);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const apiMonthlyRecord = createAsyncThunk(
    'track/month',
    async (query, thunkApi) => {
        try {
            console.log(query)
            const data = await monthlyRecord(query);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const apiAddWaterRecord = createAsyncThunk(
    'track/add',
    async (body, thunkApi) => {
        try {
            const data = await addWaterRecord(body);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message || 'An error occurred');
        }
    }
);

export const apiUpdateWaterRecord = createAsyncThunk(
    'track/update',
    async (data, thunkApi) => {
        try {
            const { _id, amount, time } = data;
            const updatedData = await updateWaterRecord(_id, String(amount), time);
            return updatedData;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const apiDeleteWaterRecord = createAsyncThunk(
    'track/delete',
    async (data, thunkApi) => {
        try {
            const {_id} = data
            const resp = await deleteWaterRecord(_id);
            return resp;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);




