
import { SignSave } from '../../controllers/sign_gre_sto';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ButtonNavPage } from './button_nav_pag_gre_sto'

interface NotificationProps {
    location:string,
    images:FileList | undefined
}

export const Notification = ({data}:{data:NotificationProps}) => {
    const dispatch = useAppDispatch()
    const {personal,profile,address} = useAppSelector((state) => state.handler.info_user);

  return (
    <>
        <div className="sm:col-span-3 mb-10 ">
            
            <div className="">
                <input
                type="text"
                required
                style={{ borderColor: "#9b5176", borderWidth: "3px", visibility: "hidden" }}
                className="input input-bordered input-sm w-full max-w-xs"
                
                />
            </div>

            <div className="">
                <h2 className="text-sm font-semibold leading-7">
                    Notificaciones
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Todas las notificaciones sobre cambios, envios pagos entre otras
                    noticias importantes, seran enviadas por el medio de correo
                    electronico
                </p>
            </div>
            

            
            <div className="mt-6 flex  text-smitems-center justify-end gap-x-6">
                <button
                    type="button"
                    className=" flex w-full btn btn-active btn-neutral mt-4 btn-sm"
                    style={{
                    backgroundColor: "#F6DAEF",
                    borderColor: "#9b5176",
                    color: "#95806b",
                    }}
                    onClick={()=>{
                        SignSave({personal:personal,profile:profile,address:address},dispatch,data.location as string,data.images!)

                    }}
                >
                    Guardar
                </button>
            </div>
                
        </div>
        <ButtonNavPage data= {data.location} ></ButtonNavPage>
    </>
    
  )
}
