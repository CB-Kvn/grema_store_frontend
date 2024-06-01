import { LoginInit } from "../interfaces/login_interface_gre_sto"
import { reducerInitialProductSelect } from "../interfaces/shopcar_interface_gre_sto"
import { User } from "../interfaces/user_interface_gre_sto"
import { parserChechOut } from "../utils/parse_data_check"


export const checkoutOrder = (infoUser: User, prodCheck: reducerInitialProductSelect, login: LoginInit) => {

    const resulstParser = parserChechOut(infoUser, prodCheck, login)
    console.log(resulstParser)


}