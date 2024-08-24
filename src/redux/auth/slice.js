import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { apiLogInUser, apiLogOutUser, apiRegisterUser, apiCurrentUser, apiUpdateUser } from "./operation"




let INITIAL_STATE = {
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
        .addCase(apiCurrentUser.fulfilled, (state, action) => {
            state.userData = action.payload
            state.loading = false
        })
        .addCase(apiUpdateUser.fulfilled, (state, action) => {
            state.userData = action.payload
            state.loading = false
        })
        .addMatcher(
            isAnyOf(
              apiRegisterUser.pending,
              apiLogInUser.pending,
              apiLogOutUser.pending,
              apiCurrentUser.pending,
              apiUpdateUser.pending
            ),
            (state) => {
              state.loading = true;
              state.error = false;
            }
          )
        .addMatcher(
            isAnyOf(
                apiRegisterUser.rejected,
                apiLogInUser.rejected,
                apiLogOutUser.rejected,
                apiCurrentUser.rejected,
                apiUpdateUser.rejected
            ), (state) => {
                state.loading = false,
                state.error = true
            }
        )
    },
})

export const authReducer = authSLice.reducer



