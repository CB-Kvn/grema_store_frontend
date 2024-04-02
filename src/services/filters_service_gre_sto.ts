import axios from "axios";
import { APIResponseFilters, FiltersToApi } from "../interfaces/filters_interface_gre_sto";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";


const url = import.meta.env.BASE_URL

export const getAllFilters = async () => {
    
    try {
        const response = await axios.get(url+'/grema-store/filters/filters');


        return response.data as APIResponseFilters

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}

export const getProductFilters = async (data:FiltersToApi) => {

    try {
        const response = await axios.post(url+'/product/get-all-filters',data
          );


        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}