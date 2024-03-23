import axios from "axios";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";



export const getAllProducts = async () => {

    try {
        const response = await axios.get('http://localhost:5000/grema-store/product/get-all');

        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}