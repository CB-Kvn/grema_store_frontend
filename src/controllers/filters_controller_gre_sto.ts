/* eslint-disable @typescript-eslint/no-explicit-any */
import { add_filters_list } from "../redux/reducers_slices/filters_gre_sto_slice";
import { getAllFilters } from "../services/filters_service_gre_sto";


export const getFilters = async (dispatch: any) => {
  try {
    const data = await getAllFilters();

    const datax = {
      ...data?.data,
    descuento:[{descuento:"descuento"}]    }

    dispatch(add_filters_list({color:datax.color,tam:datax.size,forma:datax.shape,material:datax.material,categoria:datax.category,descuento:datax.descuento}))
    return {color:datax.color,tam:datax.size,forma:datax.shape,material:datax.material,categoria:datax.category,descuento:datax.descuento}
  } catch (error) {
    console.log(error);
  }
};



