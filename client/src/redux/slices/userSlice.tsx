import { createSlice } from "@reduxjs/toolkit"

// STATE TYPESCRIPT
interface UserStateValue {
    username: string,
    email: string,
}

interface UserState {
    value: UserStateValue
}

// DEFINE INITIAL STATE
const initialState = { value: { username: '', email: '' } } as UserState


// CREATE SLICE
export const userSlice = createSlice({
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