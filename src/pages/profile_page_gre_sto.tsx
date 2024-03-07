
// import { Navigation_Gre_Sto } from "../components/navigation/index_gre_sto";
import { useEffect } from "react";
import { MenuProfile } from "../components/profile/index_gre_sto";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch } from "../redux/store";
// import { TabsProfile } from "../components/profile/tabsProfile";


export const Profile = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(loader_visible({msg:'',show:true}))  
    setTimeout(() => {
      dispatch(loader_visible({msg:'',show:false})) 
    }, 1500);
  },[])
  return (
    <>
    <MenuProfile></MenuProfile>
    
    </>
  );
};
