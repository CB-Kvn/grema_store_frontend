import { createSlice } from "@reduxjs/toolkit"


// Define the initial state using that type
const initialState = {
    show: false,
    msg:""
}

export const ToastSlice = createSlice({
    name: 'login_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        toast_visible: (state,action) => {
            state.show = action.payload.show 
            state.msg = action.payload.msg
            
        },
        

    },
})

export const { toast_visible } = ToastSlice.actions

export default ToastSlice.reducer