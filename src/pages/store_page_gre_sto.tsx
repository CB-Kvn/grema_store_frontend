import { useEffect } from "react";
import { MenuStore } from "../components/store/index_gre_sto";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch  } from "../redux/store"
import { Alerts } from "../components/alerts/alerts_guest_gre_sto";

export const Store = () => {
  const dispatch = useAppDispatch();
  

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
      <Alerts msg={{
        msg1:"No estas logeado, continuaras como invitado",
        msg2:"Recuerda que la informacion se guardara temporalmente!",
        msg3:"Procura abrir una sesion",
        msg4:"Continuar!",
      }}
      ></Alerts>
    </div>
  );
};
