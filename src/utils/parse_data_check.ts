import { LoginInit } from "../interfaces/login_interface_gre_sto";
import { reducerInitialProductSelect } from "../interfaces/shopcar_interface_gre_sto";
import { User } from "../interfaces/user_interface_gre_sto";
import { v4 as uuidv4 } from 'uuid';

export const parserChechOut = (infoUser:User,prodCheck:reducerInitialProductSelect,login:LoginInit) => {

    const idOrder = uuidv4()

    const preDataOrder = {
        orderNumber:idOrder,
        amount:prodCheck.total,
        userId:login.userId,
        name: login.name,
        idGues: login.userId,
        email:login.email,
        phone: login.phone,
        address: login.address,
        typeUser:login.type,
        tax:0,
        typeShipping:  prodCheck.envio_type,
        shipping: prodCheck.envio_price,
        to:login.email ,
        subject: "Por favor confirmar orden",
        text: "Recuerde que debe agregar al formulario el comprobante  imagen o el pdf ",
        type:"msgToConfirmation"
    }
    const detailsOrder = prodCheck.data.map((element)=>{
        return {
            orderNumber: idOrder,
            inventoryId: element.inventoryId,
            productId: element.id,
            quantity: element.quantyOrder!,
            price: element.precio - (element.precio*(element.desc/100))
        }
    })


    return {
        ...preDataOrder,
        details:detailsOrder
        
        
    }
}