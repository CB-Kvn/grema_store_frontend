import axios from "axios";
import { APIResponseFilters, FiltersToApi } from "../interfaces/filters_interface_gre_sto";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";



export const getAllFilters = async () => {

    try {
        const response = await axios.get('http://localhost:5000/grema-store/filters/filters');


        return response.data as APIResponseFilters

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}

export const getProductFilters = async (data:FiltersToApi) => {

    try {
        const response = await axios.post('http://localhost:5000/grema-store/product/get-all-filters',data
          );


        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}