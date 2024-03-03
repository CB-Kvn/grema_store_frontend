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
    },
    shopCart_visible:{
        show: false,
        msg:""
    },
    loader_visible:{
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
        shopCart_visible: ( state,action) => {
            state.shopCart_visible.show =action.payload.show
        }, 
        loader_visible:(state,action) =>{
            state.loader_visible.show = action.payload.show
        }

    },
})

export const { toast_visible,bannerCommercial_visible,shopCart_visible,loader_visible } = HandlersSlice.actions

export default HandlersSlice.reducer