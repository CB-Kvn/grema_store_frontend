import axios from "axios";
import { Invoice } from "../interfaces/checkout_interface_gre_sto";

const url = import.meta.env.VITE_URL_BACKEND

export const uploadConfirmation = async (params1:object ,params2:FileList) => {

    try {

        
        const formData = new FormData()
        
        for (let i = 0; i < params2.length; i++) {
            formData.append(`files`, params2[i]);
        }

        formData.append('idOrder',JSON.stringify(params1))

        const url_user = '/orders/confirmation-order'
        const response = await axios.post(url+url_user , formData , {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
              },
        });

        

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}

export const checoutOrder = async (resulstParser: Invoice) => {

    try {


        const url_filter = '/orders/orders-in'
        const response = await axios.post(url + url_filter, resulstParser);


        return response.data

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta'
        })
    }

}