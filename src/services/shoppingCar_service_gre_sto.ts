import axios from "axios";
import { APIResponseFilters } from "../interfaces/filters_interface_gre_sto";
import { ProductSelect } from "../interfaces/products_interface_gre_sto";




const url = import.meta.env.VITE_URL_BACKEND


export const addShoppingService = async (info:ProductSelect, token:string) => {
    
    try {

        console.log(info)


        const url_filter = '/shopping/add-shopping'
        const response = await axios.post(url+url_filter,{id:info.id,userId:info.userId,productId:info.productId,quantyOrder:info.quantyOrder,type:"Shop"},{
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

export const removeShoppingService = async (id:string, token:string) => {
    
    try {

        const url_filter = '/shopping/remove-shopping'
        const response = await axios.post(url+url_filter,{id:id},{
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
