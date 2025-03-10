import { createSlice } from "@reduxjs/toolkit";
import {apiAddWaterRecord, apiDailyRecord, apiDeleteWaterRecord, apiMonthlyRecord, apiUpdateWaterRecord} from './operation'
import { apiLogOutUser } from "../auth/operation";


const INITIAL_STATE = {
    items: {
        perDay: {
            data: [],
            waterAmount: 0
        },
        perMonth: [],
    },
    isLoading: false,
    error: null,
}

const handlePending = (state) => {
    state.isLoading = true
}

const handleError = (state, action) => {
    state.isLoading = false
    state.error = action.payload?.message || action.error?.message || 'An error occurred'
}

const authWaterSlice = createSlice({
    name: "track",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
        .addCase(apiDailyRecord.pending, handlePending)
        .addCase(apiDailyRecord.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items.perDay = action.payload;
        })
        .addCase(apiDailyRecord.rejected, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.error = 'idk'
        })

        .addCase(apiMonthlyRecord.pending, handlePending)
        .addCase(apiMonthlyRecord.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items.perMonth = action.payload
        })
        .addCase(apiMonthlyRecord.rejected, handleError)

        .addCase(apiAddWaterRecord.pending, handlePending)
        .addCase(apiAddWaterRecord.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.perDay.data.push(action.payload);
            state.items.perMonth.push(action.payload);
            state.items.perDay.waterAmount += Number(action.payload.amount);
          })
        .addCase(apiAddWaterRecord.rejected, handleError)

        .addCase(apiDeleteWaterRecord.pending, handlePending)
        .addCase(apiDeleteWaterRecord.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            console.log(action)
            const index = state.items.perDay.data.findIndex(record => record._id === action.meta.arg._id)
            state.items.perDay.data.splice(index, 1)
            state.items.perDay.waterAmount -= action.meta.arg.amount
            const monthIndex = state.items.perMonth.findIndex(record => record._id === action.meta.arg._id)
            state.items.perMonth.splice(monthIndex, 1)
        })
        .addCase(apiDeleteWaterRecord.rejected, handleError)

        .addCase(apiUpdateWaterRecord.pending, handlePending)
        .addCase(apiUpdateWaterRecord.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items.perDay.data.find(record => {
                if(record._id === action.payload._id){
                    record.time = action.payload.time
                    state.items.perDay.waterAmount -= Number(record.amount)
                    state.items.perDay.waterAmount += Number(action.payload.amount)
                    record.amount = action.payload.amount 
                }
            })
            state.items.perMonth.find(record => {
                if(record._id === action.payload._id){
                    record.time = action.payload.time
                    record.amount = action.payload.amount
                }
            })
        })
        .addCase(apiUpdateWaterRecord.rejected, handleError)

        .addCase(apiLogOutUser.fulfilled, (state) => {
            state.items.perDay = []
            state.items.perMonth = []
            state.error = null
            state.isLoading = false
        })
    }
})


export const waterReducer = authWaterSlice.reducer
