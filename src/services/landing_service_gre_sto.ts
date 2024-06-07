import axios from "axios";

const url = import.meta.env.VITE_URL_BACKEND

export const sendingEmailService = async (name:string,email:string,msg:string) => {

    try {
        
        const dataRequest = {
            to:"grema.store.cr.online@gmail.com",
            subject:"Mensaje del cliente "+name+" con el correo "+email,
            text:msg,
            type:"msgToClient"
        }

        const url_filter = '/email/email-confirmation'
        const response = await axios.post(url+url_filter,dataRequest
          );


        return response.data
    } catch (error) {
        console.log({
           error: error, msg: 'Error en la consulta' 
        })
    }

}