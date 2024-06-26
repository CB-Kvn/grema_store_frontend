import { useEffect } from "react";
import { MenuStore } from "../components/store/index_gre_sto";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useLocation, useParams } from "react-router-dom";
import { getUniqueProduct } from "../controllers/products_controller_gre_sto";
import { ProductDetail } from "../components/store/product_detail";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { Carts } from "../components/store/carts_gre_sto";
import { Alert } from "../components/alerts/alert_modal_gre_sto";

export const ProductDetailStore = () => {
 

  const dispatch = useAppDispatch();
  const { inventoryId } = useParams();
  const location = useLocation();
  const alert = useAppSelector((state) => state.handler.alert.type);

  useEffect(() => {
    getUniqueProduct(dispatch, inventoryId!);
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(loader_visible({ msg: "", show: true }));

    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 1500);
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://grema-store-frontend.vercel.app/images/backs8.png",
        backgroundSize: "cover",
      }}
    >
      <MenuStore></MenuStore>
      <ProductDetail />
      <Carts></Carts>
      {
        alert ? (<Alert typeAlert={alert}></Alert>):(<></>)
      }
      
    </div>
  );
};
