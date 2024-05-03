import { ArrayParseProducts} from "../interfaces/products_interface_gre_sto";
import { selected_product } from "../redux/reducers_slices/products_gre_sto_slice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectedProduct = (data:ArrayParseProducts, dispatch:any) =>{
    const selected = {
        id: data.id.toString(),
        nombre: data.name,
        precio: Number(data.price),
        quantyInv: data.quantity,
        desc: data.desc,
        description: data.description,
        images: data.imageSrc,
        
      }

      dispatch(selected_product({data:selected}))
} 