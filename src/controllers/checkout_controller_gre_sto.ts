import { Invoice } from "../interfaces/checkout_interface_gre_sto"
import { GuestCheck, LoginInit } from "../interfaces/login_interface_gre_sto"
import { reducerInitialProductSelect } from "../interfaces/shopcar_interface_gre_sto"
import { User } from "../interfaces/user_interface_gre_sto"
import { checoutOrder } from "../services/checkout_service_gre_sto"
import { parserChechOut } from "../utils/parse_data_check"


export const checkoutOrder = (infoUser: User, prodCheck: reducerInitialProductSelect, login: LoginInit,dataGuest:GuestCheck) => {

    const resulstParser:Invoice = parserChechOut(infoUser, prodCheck, login, dataGuest)
    console.log(resulstParser)
    checoutOrder(resulstParser)


}