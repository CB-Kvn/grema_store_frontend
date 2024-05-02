import axios from "axios";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";

const url = import.meta.env.VITE_URL_BACKEND

export const getAllProducts = async (token:string) => {

    try {
        const url_products = '/product/get-all'
        const response = await axios.get(url+url_products,{
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