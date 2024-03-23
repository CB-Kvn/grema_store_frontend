import { createSlice } from "@reduxjs/toolkit"

// Define the initial state using that type
const initialState = {
    toast:{
        show: false,
        msg:"",
        
    },
    signUp:{
        show: false,
    },
    shopCart_visible:{
        show: false,
        msg:""
    },
    loader_visible:{
        show: false,
        msg:""
    },
    password_verify:{
        show: false,
    },
    password_confirm:{
        show: false,
    }

    
}

export const HandlersSlice = createSlice({
    name: 'handlers',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        toast_visible: (state,action) => {
            state.toast.show = action.payload.show 
            state.toast.msg = action.payload.msg
            
        },
        signUp_visible: (state,action) => {
            state.signUp.show = action.payload.show 
            
        },
        shopCart_visible: ( state,action) => {
            state.shopCart_visible.show =action.payload.show
        }, 
        loader_visible:(state,action) =>{
            state.loader_visible.show = action.payload.show
        },
        password_verify:(state,action) =>{
            state.password_verify.show = action.payload.show
        },
        password_confirm:(state,action) =>{
            state.password_confirm.show = action.payload.show
        },

    },
})

export const { toast_visible,signUp_visible,shopCart_visible,loader_visible,password_verify,password_confirm } = HandlersSlice.actions

export default HandlersSlice.reducer