import axios from "axios";

const url = import.meta.env.VITE_URL_BACKEND

export const uploadConfirmation = async (params1:string ,params2:FileList) => {

    try {

        
        const formData = new FormData()
        
        for (let i = 0; i < params2.length; i++) {
            formData.append(`images`, params2[i]);
        }

        formData.append('body',JSON.stringify(params1))

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