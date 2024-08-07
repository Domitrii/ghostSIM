import { authReducer } from './auth/slice.js';
import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {waterReducer} from './water/slice.js'

const authConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authConfig, authReducer),
        water: waterReducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
    })
})

export const persist = persistStore(store)