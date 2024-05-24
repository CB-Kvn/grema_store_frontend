/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginInit } from "../interfaces/login_interface_gre_sto";
import { set_top_num } from "../redux/reducers_slices/pagination_gre_sto";
import { add_products_store, selected_product } from "../redux/reducers_slices/products_gre_sto_slice";
import { getAllProducts, getUniqueProductService } from "../services/products_service_gre_sto";
import { parseProducts, parseProductUnique } from "../utils/verify_parse_data/parseProducts";


export const getAll = async (dispatch:any,login:LoginInit, page:number) => {
  try {
    const data = await getAllProducts(login.token,page);
    
    const date_ready = parseProducts(data!);

    dispatch(set_top_num ({num:data!.data.total/10}))
    dispatch(add_products_store({data: date_ready}))
    
  } catch (error) {
    console.log(error);
  }
};

export const getUniqueProduct = async (dispatch:any,login:LoginInit, page:number,productId:string) => {
  try {
    const data = await getUniqueProductService(login.token,page,productId);
    console.log(data)
    const date_ready = parseProductUnique(data!);

    console.log(date_ready)

    // dispatch(set_top_num ({num:data!.data.total/10}))
    dispatch(selected_product({data: date_ready}))
    
  } catch (error) {
    console.log(error);
  }
};


