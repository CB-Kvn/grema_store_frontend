import { LoginInit } from "../interfaces/login_interface_gre_sto";
import { set_top_num } from "../redux/reducers_slices/pagination_gre_sto";
import { add_products_store } from "../redux/reducers_slices/products_gre_sto_slice";
import { getAllProducts } from "../services/products_service_gre_sto";
import { parseProducts } from "../utils/verify_parse_data/parseProducts";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
