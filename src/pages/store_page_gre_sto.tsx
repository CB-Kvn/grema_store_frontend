import { useEffect } from "react";
import { MenuStore } from "../components/store/index_gre_sto";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch } from "../redux/store";
import {
  getFilters,
  getProductsFilters,
} from "../controllers/filters_controller_gre_sto";
import { useLocation, useParams } from "react-router-dom";
import { add_url_filters } from "../redux/reducers_slices/filters_gre_sto_slice";
import { reset_pagination } from "../redux/reducers_slices/pagination_gre_sto";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Store = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const history = useHistory();
  const query = useQuery();





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
  }, [location.search, dispatch]);

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
      {" "}
      <MenuStore></MenuStore>
    </div>
  );
};
