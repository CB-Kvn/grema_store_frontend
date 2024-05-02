import { createSlice } from "@reduxjs/toolkit"
import { LoginInit, LoginSuccessful, RefreskToken } from "../../interfaces/login_interface_gre_sto"


const initialState: LoginInit = {
    msg: '',
    email: '',
    token: '',
    userId: '',
    image: '',
    success: false,
    type: ''
}



export const LoginSlice = createSlice({
    name: 'login_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        login_successful_guest: (state, action: LoginSuccessful) => {


            state.msg = action.payload.msg
            state.email = action.payload.data.email
            state.userId = action.payload.data.userId
            state.image = action.payload.data.image
            state.token = action.payload.data.token!
            state.success = true
            state.type = action.payload.data.type


        },
        refresh_token: (state, action: RefreskToken) => {

            console.log(action.payload)
            state.token = action.payload.data.token!



        }


    },
})

export const { login_successful_guest, refresh_token } = LoginSlice.actions

export default LoginSlice.reducer