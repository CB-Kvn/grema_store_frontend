
import { decrement, increment } from "../../redux/reducers_slices/pagination_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const Pagination = () => {
    const pagination = useAppSelector((state) => state.pagination.value);
    const dispatch = useAppDispatch()
  return (
    <> 
      <div className="join justify-center">  
        <button className="join-item btn btn-sm" onClick={() => dispatch(decrement())}>«</button>
        <button className="join-item btn btn-sm">Pagina {pagination}</button>
        <button className="join-item btn btn-sm" onClick={() => dispatch(increment())}>»</button>
      </div>
    </>
  );
};
