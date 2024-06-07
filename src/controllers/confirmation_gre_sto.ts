/* eslint-disable @typescript-eslint/no-unused-vars */

import { uploadConfirmation } from "../services/checkout_service_gre_sto";


export const confirmationOrder = (uploadedFile:File[],id:string) => {
    try {
        const dataTransfer = new DataTransfer(); // Crear un objeto DataTransfer
        uploadedFile.forEach(file => dataTransfer.items.add(file)); // Añadir cada archivo al DataTransfer
        
        uploadConfirmation({orderId:id},dataTransfer.files)
    } catch (error) {
        console.log(error)
    }
}