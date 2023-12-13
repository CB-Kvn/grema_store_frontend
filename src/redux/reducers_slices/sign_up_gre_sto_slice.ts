import { createSlice } from "@reduxjs/toolkit"

interface NewUserForm {
    payload: {
        show: boolean
    }
}

const initialState = {
    show:false
}

export const SignUpSlice = createSlice({
    name: 'new_user_gre_sto',
    initialState,

    reducers: {
        new_user_form: (state, action: NewUserForm) => {
            state.show = action.payload.show
            
        },
    },
})

export const { new_user_form } = SignUpSlice.actions

export default SignUpSlice.reducer