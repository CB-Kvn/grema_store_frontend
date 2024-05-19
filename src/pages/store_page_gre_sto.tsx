import { useEffect } from "react";
import { MenuStore } from "../components/store/index_gre_sto";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch, useAppSelector  } from "../redux/store"
import { reset_pagination } from "../redux/reducers_slices/pagination_gre_sto";
import { getFilters } from "../controllers/filters_controller_gre_sto";
import { getAll } from "../controllers/products_controller_gre_sto";

export const Store = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state)=> state.login)
  
  

  useEffect(() => {
    dispatch(loader_visible({ msg: "", show: true }));
    dispatch(reset_pagination())
    getFilters(dispatch)
    getAll(dispatch, login);
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
