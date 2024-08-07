import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { apiLogInUser, apiLogOutUser, apiRegisterUser } from "./operation"




const INITIAL_STATE = {
  userData: null,
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  loading: false,
  error: null,
}

const authSLice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,

    extraReducers: (builder) => {
        builder.addCase(apiRegisterUser.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(apiLogInUser.fulfilled, (state, action) => {
            state.loading = false
            state.userData = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        })
        .addCase(apiLogOutUser.fulfilled, () => {
            return INITIAL_STATE;
        })
        .addMatcher(
            isAnyOf(
                apiRegisterUser.rejected,
                apiLogInUser.rejected,
                apiLogOutUser.rejected,
            ), (state) => {
                state.loading = false,
                state.error = true
            }
        )
    },
})

export const authReducer = authSLice.reducer



