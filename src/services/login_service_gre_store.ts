
import axios from "axios";
import { LoginService } from "../interfaces/login_gre_sto_service";


export const loginService = async (params:LoginService) =>{
    const response = await axios.post('http://localhost:5000/grema-store/user/loggin-user', { email: params.email, password: params.password  });
    console.log(response)
    return response
}