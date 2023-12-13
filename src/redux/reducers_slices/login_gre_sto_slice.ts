import { createSlice } from "@reduxjs/toolkit"

interface LoginSuccessful {
    payload: {
        data: { 
            email: string
            token?: string
        }
        msg: string
        success:boolean

    }
}

// Define the initial state using that type
const initialState = {
    msg: '',
    email: '',
    token: '',
    success: false
}

export const LoginSlice = createSlice({
    name: 'login_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        login_successful: (state, action: LoginSuccessful) => {
            state.msg = action.payload.msg
            state.email = action.payload.data.email
            state.token = action.payload.data.token!
            state.success = true

        },


    },
})

export const { login_successful } = LoginSlice.actions

export default LoginSlice.reducer