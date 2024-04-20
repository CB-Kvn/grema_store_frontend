/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductSelect } from "../interfaces/products_interface_gre_sto";
import { RemoveProductSelect, UpdateQuantyProductSelect } from "../interfaces/shopcar_interface_gre_sto";
import { alert_type } from "../redux/reducers_slices/handler_gre_sto_slice";
import { add_products_selected, remove_products_selected, update_products_selected } from "../redux/reducers_slices/shopcar_gre_sto_slice";



export const addSelectionOrder = (data: ProductSelect, dispatch: any, counter: number) => {

  
    try {
        const orderData = { ...data }

    if(counter === 0){
        dispatch(alert_type({type:"blockQuanty"}))
        setTimeout(() => {
            dispatch(alert_type({type:""}))
        }, 3000);
        return
    }
    orderData.quantyOrder = counter
    dispatch(add_products_selected({ data: orderData }))
    dispatch(alert_type({type:"successAddCar"}))
    setTimeout(() => {
        dispatch(alert_type({type:""}))
    }, 3000);
    } catch (error) {
        dispatch(alert_type({type:"error"}))
        setTimeout(() => {
            dispatch(alert_type({type:""}))
        }, 3000);
    }
    
}

export const RemoveSelectionOrder = (data: RemoveProductSelect, dispatch: any) => {
    dispatch(remove_products_selected({ id: data.payload.id }))
}

export const UpdateSelectionOrder = (data: UpdateQuantyProductSelect, dispatch: any, counter: number) => {
    dispatch(update_products_selected({ id: data.payload.id, quanty: counter }))
}