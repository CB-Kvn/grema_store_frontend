import { createSlice } from "@reduxjs/toolkit"

interface Location {
    payload:{
        weGo: string
        weStay: string
    }
   
}

// Define the initial state using that type
const initialState = {
    weGo: '',
    weStay: '',
}

export const Location = createSlice({
    name: 'login_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        actuallyLocation: (state, action: Location) => {
            state.weGo = action.payload.weGo
            state.weStay = action.payload.weStay
        },


    },
})

export const { actuallyLocation } = Location.actions

export default Location.reducer