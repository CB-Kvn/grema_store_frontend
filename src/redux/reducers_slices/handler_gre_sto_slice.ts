import { createSlice } from "@reduxjs/toolkit"

// Define the initial state using that type
const initialState = {
    toast:{
        show: false,
        msg:""
    },
    bannerCommercial:{
        show: false,
        msg:""
    }
}

export const HandlersSlice = createSlice({
    name: 'handlers',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        toast_visible: (state,action) => {
            state.toast.show = action.payload.toast.show 
            state.toast.msg = action.payload.toast.msg
            
        },
        bannerCommercial_visible: (state,action) => {
            state.bannerCommercial.show = action.payload.show 
            state.bannerCommercial.msg = action.payload.msg
            
        },
        

    },
})

export const { toast_visible,bannerCommercial_visible } = HandlersSlice.actions

export default HandlersSlice.reducer