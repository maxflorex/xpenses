import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'

// PERSIST REDUX
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { stytchSlice } from './slices/stytchSlice'


// PERSIST CONFIG
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'stytchState']
}


// COMBINE REDUCERS
const rootReducer = combineReducers({
    userState: userSlice.reducer,
    stytchState: stytchSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>


// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer)


// STORE
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

