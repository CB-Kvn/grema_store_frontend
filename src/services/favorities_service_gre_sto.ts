import axios from "axios";
import { APIResponseFilters } from "../interfaces/filters_interface_gre_sto";
import { Favorites_Carts } from "../interfaces/lovin_interface_gre_sto";




const url = import.meta.env.VITE_URL_BACKEND


export const addFavoritiesService = async (info: Favorites_Carts, token: string) => {

    try {


        const url_filter = '/favorities/add-favorities'
        const response = await axios.post(url + url_filter, info, {
            headers: {
                grema_store_token: token
            }

        });


        return response.data as APIResponseFilters

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta'
        })
    }

}

export const removeFavoritiesService = async (idLove: string, token: string) => {

    try {

        const url_filter = '/favorities/remove-favorities'
        const response = await axios.post(url + url_filter, { id: idLove }, {
            headers: {
                grema_store_token: token
            }

        });


        return response.data as APIResponseFilters

    } catch (error) {
        console.log({
            error: error, msg: 'Error en la consulta'
        })
    }

}
