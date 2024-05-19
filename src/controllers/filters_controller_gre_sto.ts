import { DataFilter, Filter} from "../interfaces/filters_interface_gre_sto";
import { add_filters_list } from "../redux/reducers_slices/filters_gre_sto_slice";
import { set_top_num } from "../redux/reducers_slices/pagination_gre_sto";
import { update_products_filters_store } from "../redux/reducers_slices/products_gre_sto_slice";
import { getAllFilters, getProductFilters } from "../services/filters_service_gre_sto";
import { parseFiltersToApi } from "../utils/verify_parse_data/parseFilters";
import { parseProducts } from "../utils/verify_parse_data/parseProducts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFilters = async (dispatch: any) => {
  try {
    const data = await getAllFilters();

    dispatch(add_filters_list({color:data?.data.color,tam:data?.data.size,forma:data?.data.shape,material:data?.data.material,categoria:data?.data.category}))

  } catch (error) {
    console.log(error);
  }
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProductsFilters = async (filters: DataFilter, selectedFilters: Filter, _dispatch: any, pagination:number) => {



  const data = parseFiltersToApi(filters, selectedFilters)
  

  const dataApi = await getProductFilters(data! as DataFilter,"",pagination);

  console.log(dataApi)

  const date_ready = parseProducts(dataApi!);

  _dispatch(update_products_filters_store({data: date_ready}))

  _dispatch(set_top_num({num:Math.ceil(dataApi!.data.total/10)}))


}
