import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'

// PERSIST REDUX
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { stytchSlice } from './slices/stytchSlice'
import { allUsersSlice } from './slices/allUsersSlice'


// PERSIST CONFIG
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'stytchState', 'allUsersState']
}


// COMBINE REDUCERS
const rootReducer = combineReducers({
    userState: userSlice.reducer,
    stytchState: stytchSlice.reducer,
    allUsersState: allUsersSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>


// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer)


// STORE
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

