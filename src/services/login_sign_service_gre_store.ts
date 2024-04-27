
import axios from "axios";
import { LoginService, UserHttpService } from "../interfaces/login_interface_gre_sto";
const url = import.meta.env.VITE_URL_BACKEND

export const loginService = async (params: LoginService) => {

    const body = { email: params.email, password: params.password }
    try {
        const url_user = '/user/loggin-user'
        const response = await axios.post(url+url_user ,body , {
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

        console.log(response)

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}