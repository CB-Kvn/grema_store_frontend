/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendingEmailService } from "../services/landing_service_gre_sto"

export const sendingEmail = (name:string,email:string,msg:string,setName:any,setEmail:any,setMsg:any) => {
    try {
        sendingEmailService(name,email,msg)
        setName("")
        setEmail("")
        setMsg("")
    } catch (error) {
        console.log({error:error,msg:"Error al enviar mensaje"})
    }
}