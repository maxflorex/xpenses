import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'

// PERSIST REDUX
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { CurrentUser } from './slices/currentUser'
import { ExpenseSlice } from './slices/expenseSlice'


// PERSIST CONFIG
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'currentState', 'expenseState']
}


// COMBINE REDUCERS
const rootReducer = combineReducers({
    userState: userSlice.reducer,
    currentState: CurrentUser.reducer,
    expenseState: ExpenseSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>


// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer)


// STORE
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

