
// import { propsFilters } from "../interfaces/filters_interface_gre_sto";
// import { propsFilters } from "../interfaces/filters_interface_gre_sto";
import { Filter, FiltersToApi, propsFilters } from "../interfaces/filters_interface_gre_sto";
// import { APIResponseProducts } from "../interfaces/products_interface_gre_sto";
import { add_filters_store } from "../redux/reducers_slices/filters_gre_sto_slice";
import { update_products_filters_store } from "../redux/reducers_slices/products_gre_sto_slice";
import { getAllFilters, getProductFilters } from "../services/filters_service_gre_sto";
import { parseFilters, parseFiltersToApi } from '../utils/verify_parse_data/parseFilters'
import { parseProducts } from "../utils/verify_parse_data/parseProducts";
// import { parseProduct } from "../utils/productsStoreFilters"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFilters = async (dispatch: any) => {
  try {
    const data = await getAllFilters();

    const date_ready = parseFilters(data!.data);


    dispatch(add_filters_store({ data: { filters: date_ready.filters } }))

  } catch (error) {
    console.log(error);
  }
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProductsFilters = async (filters: propsFilters[], selectedFilters: Filter[], _dispatch: any) => {


  const data = parseFiltersToApi(filters, selectedFilters)

  const dataApi = await getProductFilters(data! as FiltersToApi);

  const date_ready = parseProducts(dataApi!);

  _dispatch(update_products_filters_store({data: date_ready}))


}
