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
    },
    info_user:{
        personal:{
            id: '',
            name: '',
            lastName: '',
            cellphone: '',
            genre: '',
        },
        profile:{
            email: '',
            password: '',
            address: '',
            image: '' 
        },
        address:{
            country:'',
            state:'',
            address:'',
            code:''
        },
        
        page: 0


    },
    alert:{
        type:"",
        enable:false
    },
    discount_show:{
        enable:false
    },
    confirmation_page:{
        enable:false
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
        add_personal_info:(state,action)=>{
            state.info_user.personal = action.payload.personal

        },
         add_profile_info:(state,action)=>{
            state.info_user.profile = action.payload.profile

        },
        add_address_info:(state,action)=>{
            state.info_user.address = action.payload.address

        },
        counter_page:(state,action)=>{
            state.info_user.page = action.payload.page
        },
        alert_type:(state,action)=>{
            state.alert.type = action.payload.type
            state.alert.enable = action.payload.enable
        },
        discount_active:(state,action)=>{
            state.discount_show.enable = action.payload.enable
        },
        confirmation_active:(state,action)=>{
            state.confirmation_page.enable = action.payload.enable
        },



    },
})

export const { toast_visible,signUp_visible,shopCart_visible,loader_visible,password_verify,password_confirm,counter_page,add_personal_info,add_address_info,add_profile_info,alert_type,discount_active,confirmation_active } = HandlersSlice.actions

export default HandlersSlice.reducer