import { RemoveSelectionOrder } from "../../controllers/shopCar_controller_gre_sto";
import { LoginInit } from "../../interfaces/login_interface_gre_sto";
import { useAppDispatch } from "../../redux/store";

interface MensajesAlert {
  msg1:string
  msg2:string
  msg3:string
  msg4:string,
  id?:string,
  type?:string
  login?:LoginInit
}

export const Alerts = ({msg}:{msg:MensajesAlert}) => {

  const dispatch = useAppDispatch()

  const handlerClose = () => {
    const element = document.querySelector("#my_modal_3") as HTMLInputElement;
    element.checked = false;
  };

  const handlerButton = () =>{

    const data={
      payload :{
        id: msg.id!
      }
    } 
      switch (msg.type) {
        case "alert-eliminar-cart":
          
          RemoveSelectionOrder(data,dispatch,msg.login!)
          break;
        
          
      
        default:
          break;
      }
  }

  return (
    <>
      <input type="checkbox" id="my_modal_3" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                handlerClose();
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Notificacion!</h3>
          <p className="pt-4">{msg.msg1}</p>
          <p className="">
              {msg.msg2}
          </p>
          <p className="font-bold">{msg.msg3}</p>
          <div className="modal-action">
            <button className="btn" onClick={()=>{handlerButton()}}>{msg.msg4}</button>
          </div>
        </div>
      </div>
    </>
  );
};
