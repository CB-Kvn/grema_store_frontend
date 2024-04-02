import axios from "axios";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";

const url = import.meta.env.VITE_URL_BACKEND

export const getAllProducts = async () => {

    try {
        const url_products = '/product/get-all'
        const response = await axios.get(url+url_products);

        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}