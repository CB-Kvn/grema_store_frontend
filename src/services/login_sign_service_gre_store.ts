import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { APIResponseLogin, LoginInit, LoginService, UserHttpService } from "../interfaces/login_interface_gre_sto";


const url = import.meta.env.VITE_URL_BACKEND

export const loginService = async (params: LoginService) => {

    const body = { email: params.email, password: params.password }
    try {
        const url_user = '/user/loggin-user'
        const response = await axios.post(url+url_user ,body , {
            headers: {
                guest: params.email === '' ? true : false
            }
        });

        const data = {
            success: response.data.success,
            status:  response.data.status,
            msg:     response.data.msg,
            data:{
                ...response.data.data,
                success: response.data.success  === "Ok" ? true: false
            }
            
        }
        
     

        return data as APIResponseLogin

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta' 
         })
    }

}

export const loginGuestService = async (params: LoginService) => {
    
    const body = { email: params.email, password: params.password }
    try {
        const url_user = '/user/loggin-user-guest'
        const response = await axios.post(url+url_user ,body , {
            headers:{
                'UserGuest': uuidv4()
            }
        });

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}

export const signService = async (params1: UserHttpService,params2:FileList) => {

    try {

        
        const formData = new FormData()
        
        for (let i = 0; i < params2.length; i++) {
            formData.append(`images`, params2[i]);
        }

        formData.append('body',JSON.stringify(params1))

        const url_user = '/user/create-user'
        const response = await axios.post(url+url_user , formData , {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
              },
        });

        

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}

export const loginRefreshService = async (login:LoginInit)=>{
    try {
       
        const url_user = '/user/loggin-user-guest-refresh'
        const response = await axios.post(url+url_user,'',{
            headers:{
                user:login.userId,
                email:login.email,
                image:login.image
            }
        })

        return response
    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }
}