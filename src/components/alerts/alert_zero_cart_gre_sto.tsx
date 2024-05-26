/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../redux/store";
import { alert_type, loader_visible } from "../../redux/reducers_slices/handler_gre_sto_slice";
import { handleCartShopping } from "../store/carts_gre_sto";

export const AlertZeroCart = ({component,loading}:{component:React.Dispatch<React.SetStateAction<React.ElementType<any> | null>>,loading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const dispatch = useAppDispatch()
  useEffect(() => {
   
    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 1500);
   console.log("estoy en zero product")
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
  }, []);
    
  return (
    <>
      <div className="m-10 flex max-w-lg flex-col items-center  px-8 py-10 text-gray-800 ">
      <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#9D567A" stroke-width="2"></path> <path d="M12 8L12 13" stroke="#9D567A" stroke-width="2" stroke-linecap="round"></path> <path d="M12 16V15.9888" stroke="#9D567A" stroke-width="2" stroke-linecap="round"></path> </g></svg>
      <p className="mt-4 text-center text-xl font-bold">NO hay elementos en la bolsa de compra</p>
        <p className="mt-2 text-center text-lg">
         ¿Agregar elementos?
          
        </p>
        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <button 
          className="whitespace-nowrap rounded-md bg-[#9D567A] px-4 py-3 font-medium text-white"
          onClick={()=>{component(null),loading(true),dispatch(alert_type({ type: "" })),handleCartShopping(true,dispatch)}}
          >
            
            Revisar tienda
          </button>
          {/* <button 
          className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium"
          onClick={()=>{component(null),loading(true),dispatch(alert_type({ type: "" }));}}
          >
            Ir a la tienda
          </button> */}
        </div>
      </div>
      <audio ref={audioRef} src="/src/assets/coin-donation-2-180438.mp3" />
    </>
  );
};
