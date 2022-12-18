import { createSlice } from "@reduxjs/toolkit"

// STATE TS
interface StytchStateValue {
    response: any
}

interface StytchState {
    value: StytchStateValue
}

// DEFINE INITIAL STATE
const InitialState = { value: { response: [] } } as StytchState

// SLICE
export const stytchSlice = createSlice({
    name: 'Stytch',
    initialState: InitialState,
    reducers: {
        res: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { res } = stytchSlice.actions