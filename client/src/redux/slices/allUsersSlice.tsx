import { createSlice } from "@reduxjs/toolkit";

// STATE TS VALUES
interface AllUsersValue {
    data: any
}

interface AllUsersState {
    value: AllUsersValue
}

// INITIAL STATE
const InitialState = { value: [] }

// SLICE
export const allUsersSlice = createSlice({
    name: "All Users",
    initialState: InitialState,
    reducers: {
        getAllUsers: (state, action) => {
            state.value = action.payload
        },
        cleanUsers: (state) => {
            state.value = InitialState.value
        }
    }
})

export const { getAllUsers, cleanUsers } = allUsersSlice.actions