import axios from "axios";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";

const url = import.meta.env.VITE_URL_BACKEND

export const getAllProducts = async (token:string,page:number) => {
    const body = {
        take:10,
        skip:page
    }

    try {
        const url_products = '/product/get-all'
        const response = await axios.post(url+url_products,body,{
            headers:{
                grema_store_token : token
            }
        });

        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}