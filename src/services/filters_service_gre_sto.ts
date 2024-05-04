import axios from "axios";
import { APIResponseFilters, FiltersToApi } from "../interfaces/filters_interface_gre_sto";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";



const url = import.meta.env.VITE_URL_BACKEND
export const getAllFilters = async ( token:string) => {
    
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

export const getProductFilters = async (data:FiltersToApi, token:string) => {

    try {
        
        const url_filter = '/product/get-all-filters'
        const response = await axios.post(url+url_filter,data,{
            headers:{
                grema_store_token : token
            }
        }
          );


        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}