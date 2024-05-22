import { useNavigate } from "react-router-dom";
import { getProductsFilters } from "../../controllers/filters_controller_gre_sto";
import {
  decrement,
  increment,
} from "../../redux/reducers_slices/pagination_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { filter } from "../../utils/navigate";

export const Pagination = () => {
  const pagination = useAppSelector((state) => state.pagination.value);
  const top = useAppSelector((state) => state.pagination.top);
  const dispatch = useAppDispatch();
  const newFilters = useAppSelector((state) => state.filters.dataSearch);
  const navigate = useNavigate()

  const handle_pagination = (move: string) => {
    switch (move) {
      case "up":
        
        if(pagination != top){
          dispatch(increment());
          getProductsFilters(newFilters, dispatch, pagination+1);
          filter("page",newFilters,dispatch,pagination+1,navigate)
        }
        
        
        break;
      case "down":
        
        if(pagination != (1)){
          dispatch(decrement());
          getProductsFilters(newFilters, dispatch, pagination-1);
          filter("page",newFilters,dispatch,pagination-1,navigate)
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="join justify-center">
        <button
          className="join-item btn btn-sm"
          onClick={() => handle_pagination("down")}
        >
          «
        </button>

        <button className="join-item btn btn-sm">Pagina {pagination}</button>

        <button
          className="join-item btn btn-sm"
          onClick={() => handle_pagination("up")}
        >
          »
        </button>
      </div>
    </>
  );
};
