
import { useEffect } from "react";
import {MenuStore} from "../components/store/index_gre_sto";
import { useAppDispatch } from "../redux/store";
import { actuallyLocation } from "../redux/reducers_slices/location.gre.sto.slice";

export const Store = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actuallyLocation({weGo : 'Store', weStay:'Home'}))
  },)
  
    return (
      <>
        <MenuStore></MenuStore>
      </>
    );
  };