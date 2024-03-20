
import axios from "axios";
import { LoginService, UsersService } from "../interfaces/login_gre_sto_service";


export const loginService = async (params: LoginService) => {

    const body = { email: params.email, password: params.password }
    try {
        const response = await axios.post(`http://localhost:5000/grema-store/user/loggin-user/`,body , {
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
        const response = await axios.post('http://localhost:5000/grema-store/user/create-user', params);

        console.log(response)

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}