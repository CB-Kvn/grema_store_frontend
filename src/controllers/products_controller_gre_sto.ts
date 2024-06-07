/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataFilter, Filter } from "../interfaces/filters_interface_gre_sto";
import { set_top_num } from "../redux/reducers_slices/pagination_gre_sto";
import { add_products_store, selected_product, show_products_landing, update_products_filters_store } from "../redux/reducers_slices/products_gre_sto_slice";
import { getAllProducts, getProductFilters, getProductShow, getUniqueProductService } from "../services/products_service_gre_sto";
import { parseFiltersToApi } from "../utils/verify_parse_data/parseFilters";
import { parseProducts, parseProductUnique } from "../utils/verify_parse_data/parseProducts";


export const getAll = async (dispatch:any) => {
  try {
    const data = await getAllProducts();
    
    const date_ready = parseProducts(data!);

    dispatch(set_top_num ({num:data!.data.total/10}))
    dispatch(add_products_store({data: date_ready}))
    
  } catch (error) {
    console.log(error);
  }
};

export const getUniqueProduct = async (dispatch:any,productId:string) => {
  try {
    const data = await getUniqueProductService(productId);
    console.log(data)
    const date_ready = parseProductUnique(data!);

    console.log(date_ready)

    // dispatch(set_top_num ({num:data!.data.total/10}))
    dispatch(selected_product({data: date_ready}))
    
  } catch (error) {
    console.log(error);
  }
};

export const getProductsShow = async (_dispatch: any) => {
  
  const dataApi = await getProductShow();


  _dispatch(show_products_landing({data: dataApi}))
}
export const getProductsFilters = async ( selectedFilters: Filter, _dispatch: any, pagination:number) => {
  
  
  const data = parseFiltersToApi(selectedFilters)
  

  const dataApi = await getProductFilters(data! as DataFilter,"",pagination);

 

  const date_ready = parseProducts(dataApi!);

  _dispatch(update_products_filters_store({data: date_ready}))

  _dispatch(set_top_num({num:Math.ceil(dataApi!.data.total/10)}))


}



