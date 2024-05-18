import { combineReducers} from "@reduxjs/toolkit";
import { LoginSlice } from "./login_gre_sto_slice";
import { SignUpSlice } from "./sign_up_gre_sto_slice";
import { HandlersSlice } from "./handler_gre_sto_slice";
import { ProductSlice } from "./products_gre_sto_slice";
import { FiltersSlice } from "./filters_gre_sto_slice";
import { LoveSlice } from "./love_gre_sto_slice";
import { SelectedSlice } from "./shopcar_gre_sto_slice";
import { PaginationSlice } from "./pagination_gre_sto"

export const rootReducer = combineReducers({
    login: LoginSlice.reducer,
    handler: HandlersSlice.reducer,
    newUser: SignUpSlice.reducer,
    products: ProductSlice.reducer,
    filters: FiltersSlice.reducer,
    love: LoveSlice.reducer,
    shopcar: SelectedSlice.reducer,
    pagination: PaginationSlice.reducer
})

