import axios from "axios";
import { APIResponseFilters } from "../interfaces/filters_interface_gre_sto";



const url = import.meta.env.VITE_URL_BACKEND
export const getAllFilters = async ( token?:string) => {
    
    try {

        
        const url_filter = '/filters/filters'
        const response = await axios.get(url+url_filter,{
            headers:{
                grema_store_token : token
            }

        });


        return response.data as APIResponseFilters

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}

