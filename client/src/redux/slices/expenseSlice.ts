import { createSlice } from "@reduxjs/toolkit";

// STATE TS VALUES
interface ExpenseState {
    value: any
}

// INITIAL STATE
const initialState = { value: {} } as ExpenseState

// SLICE
export const ExpenseSlice = createSlice({
    name: 'Expense Slice',
    initialState: initialState,
    reducers: {
        userExpenses: (state, action) => {
            state.value = action.payload
        },
        cleanUserExpenses: (state) => {
            state.value = initialState.value
        }
    }
})

export const { userExpenses, cleanUserExpenses } = ExpenseSlice.actions