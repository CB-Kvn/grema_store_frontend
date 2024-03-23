import { add_products_store } from "../redux/reducers_slices/products_gre_sto_slice";

import { getAllProducts } from "../services/products_service_gre_sto";
import { parseProducts } from "../utils/verify_parse_data/parseProducts";
// import { parseProduct } from "../utils/productsStoreFilters"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAll = async (dispatch:any) => {
  try {
    const data = await getAllProducts();
    
    const date_ready = parseProducts(data!);

    dispatch(add_products_store({data: date_ready}))
    
  } catch (error) {
    console.log(error);
  }
};
