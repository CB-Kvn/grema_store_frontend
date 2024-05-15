import axios from "axios";
import { APIResponseLogin, APIResponseUpdate, DeleteUser, LoginService, UpdateUser } from "../interfaces/login_interface_gre_sto";


const url = import.meta.env.VITE_URL_BACKEND

export const changePasswordService = async (params: LoginService) => {

    const body = { email: params.email, password: params.password, passwordNew: params.passwordNew }
    try {
        const url_user = '/user/verify-password'
        const response = await axios.put(url+url_user ,body , {
            headers: {
                guest: params.email === '' ? true : false
            }
        });

        const data = {
            success: response.data.success,
            status:  response.data.status,
            msg:     response.data.msg,
            data:{
                ...response.data.data
            }
            
        }
        
     

        return data as APIResponseLogin

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta' 
         })
    }

}

export const deleteUserService = async (params: DeleteUser) => {

    const body = { id:params.id }
    try {

        const url_user = '/user/delete-user'
        const response = await axios.put(url+url_user ,body);

        const data = {
            success: response.data.success,
            status:  response.data.status,
            msg:     response.data.msg,
            data:{
                ...response.data.data
            }
            
        }
        
     

        return data as APIResponseLogin

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta' 
         })
    }

}

export const updateUserService = async (params: UpdateUser) => {

    const body = { id:params.id.toString(),address: params.address,phone: params.phone}
    try {

        const url_user = '/user/update-profile'
        const response = await axios.put(url+url_user ,body);

        const data = {
            success: response.data.success,
            status:  response.data.status,
            msg:     response.data.msg,
            data:{
                ...response.data.data
            }
            
        }
        
     

        return data as APIResponseUpdate

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta' 
         })
    }

}