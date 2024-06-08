/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginInit } from "../interfaces/login_interface_gre_sto";
import { ProductSelect } from "../interfaces/products_interface_gre_sto";
import { RemoveProductSelect, UpdateQuantyProductSelect } from "../interfaces/shopcar_interface_gre_sto";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { add_products_selected, remove_products_selected, update_products_selected } from "../redux/reducers_slices/shopcar_gre_sto_slice";

import { v4 as uuidv4 } from 'uuid';
import { addShoppingService, removeShoppingService } from "../services/shoppingCar_service_gre_sto";


export const addSelectionOrder = async (data: ProductSelect, dispatch: any, counter: number, login: LoginInit) => {


    try {

        const orderData = { ...data }

        if (counter === 0) {

            return
        }

        orderData.quantyOrder = counter
        orderData.inventoryId = orderData.id
        orderData.userId = login.userId
        orderData.id = uuidv4()

        dispatch(add_products_selected({ data: orderData }))

        if (login.type === "inscript") {
            await addShoppingService(orderData, login.token)
        }

    } catch (error) {
        setTimeout(() => {
            dispatch(loader_visible({ msg: "", show: false }));
          }, 2000);
    }

}

export const RemoveSelectionOrder = async (data: RemoveProductSelect, dispatch: any, login: LoginInit) => {

    try {

        dispatch(loader_visible({ msg: "", show: true }));
        dispatch(remove_products_selected({ id: data.payload.id }))

        if (login.type === "inscript") {
            await removeShoppingService(data.payload.id, login.token)

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