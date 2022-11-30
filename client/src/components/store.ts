import { configureStore, createSlice } from '@reduxjs/toolkit'

interface UserStateValue {
    username: string
}

interface UserState {
    value: UserStateValue
}

const initialState = { value: { username: '' } } as UserState

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialState.value
        },
    }
})

export const { login, logout } = userSlice.actions

export const store = configureStore({
    // REDUCER IS A FUNCTION
    reducer: {
        user: userSlice.reducer
    }
}) 