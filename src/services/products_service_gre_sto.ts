import axios from "axios";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";

const url = import.meta.env.BASE_URL

export const getAllProducts = async () => {

    try {
        const response = await axios.get(url+'/grema-store/product/get-all');

        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}