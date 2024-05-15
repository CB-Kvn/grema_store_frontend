import { createSlice } from "@reduxjs/toolkit"
import { LoginInit, LoginSuccessful, RefreskToken } from "../../interfaces/login_interface_gre_sto"


const initialState: LoginInit = {
    
    email: '',
    token: '',
    userId: '',
    image: '',
    address:'',
    phone:'',
    name:'',
    type: '',
    profileId: 0,
    success: false
}



export const LoginSlice = createSlice({
    name: 'login_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        login_successful_guest: (state, action: LoginSuccessful) => {
            state.email = action.payload.data.email
            state.userId = action.payload.data.userId
            state.address = action.payload.data.address
            state.phone = action.payload.data.phone
            state.name = action.payload.data.name
            state.image = action.payload.data.image
            state.token = action.payload.data.token!
            state.type = action.payload.data.type
            state.profileId = action.payload.data.profileId
            state.success = action.payload.data.success
        },
        refresh_token: (state, action: RefreskToken) => {
            console.log(action.payload)
            state.token = action.payload.data.token!
        },
        update_information:(state,action)=>{
            state.address = action.payload.address
            state.phone =  action.payload.phone
        }


    },
})

export const { login_successful_guest, refresh_token,update_information } = LoginSlice.actions

export default LoginSlice.reducer