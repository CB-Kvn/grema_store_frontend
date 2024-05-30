import { useEffect } from "react";
import { MenuStore } from "../components/store/index_gre_sto";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch, useAppSelector} from "../redux/store";
import {
  getFilters,
  getProductsFilters,
} from "../controllers/filters_controller_gre_sto";
import { useLocation, useParams } from "react-router-dom";
import { add_url_filters } from "../redux/reducers_slices/filters_gre_sto_slice";
import { reset_pagination } from "../redux/reducers_slices/pagination_gre_sto";
import { Filters } from "../components/store/filters_gre_store";
import { Carts } from "../components/store/carts_gre_sto";
import { Carousel } from "../components/store/carousel_cat_gre_sto";
import { Alert } from "../components/alerts/alert_modal_gre_sto";
import { images_background } from "../utils/images_store.json"




const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Store = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const query = useQuery();
  const location = useLocation();
  const alert = useAppSelector((state) => state.handler.alert.type);

  useEffect(() => {
    const categoria = query.getAll("categoria");
    const color = query.getAll("color");
    const tam = query.getAll("tam");
    const forma = query.getAll("forma");
    const material = query.getAll("material");

    const filterUrls = {
      categoria: categoria.map((category) => ({
        value: category,
        checked: true,
      })),

      color: color.map((color) => ({
        value: color,
        checked: true,
      })),
      tam: tam.map((tam) => ({
        value: tam,
        checked: true,
      })),
      forma: forma.map((forma) => ({
        value: forma,
        checked: true,
      })),
      material: material.map((material) => ({
        value: material,
        checked: true,
      })),
    };

    if (filterUrls) {
      getFilters(dispatch);
      dispatch(add_url_filters({ dataSearch: filterUrls }));
      dispatch(reset_pagination({ value: page }));
      console.log(page);
      getProductsFilters(filterUrls, dispatch, Number(page));
    }
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
          `url(${images_background[1]})`,
        backgroundSize: "cover",
      }}
    >
      <MenuStore></MenuStore>
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel></Carousel>
      </nav>
      <Filters></Filters>
      <Carts></Carts>
      
      <Alert typeAlert={alert}></Alert>
      
      
    </div>
  );
};
