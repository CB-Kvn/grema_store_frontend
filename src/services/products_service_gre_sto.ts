import axios from "axios";
import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";
import { DataFilter } from "../interfaces/filters_interface_gre_sto";

const url_base = import.meta.env.VITE_URL_BACKEND

export const getAllProducts = async () => {

    try {
        const url_products = '/product/discount'
        const response = await axios.get(url_base+url_products);

        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}


export const getUniqueProductService = async (productId:string) => {

    try {

        
  
        const url_products = `/product/inventory/${productId}`;
        
        const response = await axios.get(url_base+url_products);

        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}

export const getProductFilters = async (data:DataFilter, token:string,page:number) => {

    try {
        const pageSize = 10
        const skip = (page - 1) * pageSize;
        const take = pageSize;


        const dataRequest = {
            ...data,
            skip,
            take
        }

        const url_filter = '/product/get-all-filters'
        const response = await axios.post(url_base+url_filter,dataRequest,{
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

export const getProductShow= async () => {

    try {
    

        const url_filter = '/product/show-products'
        const response = await axios.get(url_base+url_filter);


        return response.data as APIResponseProducts

    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}