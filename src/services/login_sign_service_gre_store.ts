
import axios from "axios";
import { LoginService, UsersService } from "../interfaces/login_interface_gre_sto";
const url = import.meta.env.VITE_URL_BACKEND

export const loginService = async (params: LoginService) => {

    const body = { email: params.email, password: params.password }
    try {
        const url_user = '/user/loggin-user/'
        const response = await axios.post(url+url_user ,body , {
            headers:{
                'Content-Type': 'application/json'
            }
        });

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}

export const signService = async (params: UsersService) => {

    try {

        const url_user = '/user/create-user'
        const response = await axios.post(url+url_user , params);

        console.log(response)

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}