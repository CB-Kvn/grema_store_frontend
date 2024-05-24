
import { useEffect } from 'react';
import { MenuStore } from '../components/store/index_gre_sto'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { useLocation, useParams } from 'react-router-dom';
import { getUniqueProduct } from '../controllers/products_controller_gre_sto';
import { ProductDetail } from '../components/store/product_detail';


export const ProductDetailStore = () => {

   
  const productSelected = useAppSelector(
    (state) => state.products.dataSelected
  );

  const dispatch = useAppDispatch()
  const { inventoryId } = useParams();
  const location = useLocation();



  useEffect(() => {
    console.log(inventoryId)
    console.log(["Entrando"])
    getUniqueProduct(dispatch,inventoryId!)
  }, [location,dispatch]);

  
  return (
    <div
      style={{
        backgroundImage:
          "url(https://grema-store-frontend.vercel.app/images/backs8.png",
        backgroundSize: "cover",
      }}
    >
    <MenuStore></MenuStore>

    {productSelected ? (
      
        <ProductDetail productSelected={productSelected}/>
      ) : (
        <div>No se encontró el producto.</div>
      )}
    
    </div>
  )
}
