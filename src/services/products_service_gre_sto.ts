import axios from "axios";



export const getAllProducts = async () => {

    try {
        const response = await axios.get('http://localhost:5000/grema-store/product/get-all');

        console.log(response)

        return response

    } catch (error) {
        return {
            data: { error: error, msg: 'Error en la consulta' }
        }
    }

}