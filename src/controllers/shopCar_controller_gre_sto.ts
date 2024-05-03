/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginInit } from "../interfaces/login_interface_gre_sto";
import { ProductSelect } from "../interfaces/products_interface_gre_sto";
import { RemoveProductSelect, UpdateQuantyProductSelect } from "../interfaces/shopcar_interface_gre_sto";
import { alert_type, loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { add_products_selected, remove_products_selected, update_products_selected } from "../redux/reducers_slices/shopcar_gre_sto_slice";

import { v4 as uuidv4 } from 'uuid';
import { addShoppingService, removeShoppingService } from "../services/shoppingCar_service_gre_sto";


export const addSelectionOrder = async (data: ProductSelect, dispatch: any, counter: number,login:LoginInit) => {

  
    try {
    dispatch(loader_visible({ msg: "", show: true }));

    const orderData = { ...data }

    if(counter === 0){
        dispatch(loader_visible({ msg: "", show: false }));
        dispatch(alert_type({type:"blockQuanty"}))
        setTimeout(() => {
            dispatch(alert_type({type:""}))
        }, 3000);
        return
    }

    orderData.quantyOrder = counter
    orderData.productId = Number(orderData.id)
    orderData.userId = login.userId
    orderData.id = uuidv4()
    
    dispatch(add_products_selected({ data: orderData }))

    console.log(orderData)

    if(login.type === "inscript"){
        const response = await addShoppingService(orderData,login.token)
        console.log(response)
        dispatch(loader_visible({ msg: "", show: false }));
        dispatch(alert_type({type:"successAddCar"}))
        setTimeout(() => {
            dispatch(alert_type({type:""}))
        }, 3000);
    
    }else{
        dispatch(loader_visible({ msg: "", show: false }));
        dispatch(alert_type({type:"successAddCar"}))
        setTimeout(() => {
            dispatch(alert_type({type:""}))
        }, 3000);
    }
    
    


    } catch (error) {
        dispatch(alert_type({type:"error"}))
        setTimeout(() => {
            dispatch(alert_type({type:""}))
        }, 3000);
    }
    
}

export const RemoveSelectionOrder = async (data: RemoveProductSelect, dispatch: any,login:LoginInit) => {

    try {
        
        dispatch(loader_visible({ msg: "", show: true }));
        dispatch(remove_products_selected({ id: data.payload.id }))

        if(login.type === "inscript"){
            const response = await removeShoppingService(data.payload.id ,login.token)
            console.log(response)
            dispatch(loader_visible({ msg: "", show: false }));
        }

        
        dispatch(loader_visible({ msg: "", show: false }));

    } catch (error) {
        console.log(error)
    }
    
}

export const UpdateSelectionOrder = (data: UpdateQuantyProductSelect, dispatch: any, counter: number) => {
    dispatch(update_products_selected({ id: data.payload.id, quanty: counter }))
}