import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { update_carrier_selected } from "../../redux/reducers_slices/shopcar_gre_sto_slice";

export const ProductsCheck = () => {
  
  const checkProduct = useAppSelector((state)=>state.shopcar)
  const dispatch = useDispatch()

  const handlerCarrier = (price:number, type:string)=>{
    dispatch(update_carrier_selected({price:price,type:type}))
  }
  return (
    <>
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Resumen de orden</p>
        <p className="text-gray-400">Revisa los items solicitados.</p>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {
            checkProduct.data.map((element)=>(
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <LazyLoadImage
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={element.images[0]}
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  {element.nombre}
                </span>
               
                <p className="mt-auto text-lg font-bold">₡ {element.precio - (element.precio * (element.desc / 100 ))}</p>
              </div>
  
            </div>
            ))
          }
          
        </div>

        <p className="mt-8 text-lg font-medium">Metodos de envio</p>
        <form className="mt-5 grid gap-6">
          <div className="relative">
            <input
              className="peer hidden"
              id="radio_1"
              type="radio"
              name="radio"
              checked
              onClick={()=>{handlerCarrier(2850,"GAM")}}
            />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_1"
            >
              <LazyLoadImage
                className="w-28 object-contain"
                src="/src/assets/logo_web_retina1.jpg"
                alt=""
              />
              <div className="ml-5">
                <span className="mt-2 font-semibold">
                  Correos de Costa Rica
                </span>
                <p className="text-slate-500 text-sm leading-6">
                  GAM 	 ₡2.850,00
                </p>
                <p className="text-slate-500 text-sm leading-6">
                  Plazo: 1-3 dias
                </p>
              </div>
            </label>
          </div>
          <div className="relative">
            <input
              className="peer hidden"
              id="radio_2"
              type="radio"
              name="radio"
              checked
              onClick={()=>{handlerCarrier(3650,"Resto del País")}}
            />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_2"
            >
              <LazyLoadImage
                className="w-28 object-contain"
                src="/src/assets/logo_web_retina1.jpg"
                alt=""
              />
              <div className="ml-5">
                <span className="mt-2 font-semibold">
                  Correos de Costa Rica
                </span>
                <p className="text-slate-500 text-sm leading-6">
                    Resto del País	 ₡3.650,00
                </p>
                <p className="text-slate-500 text-sm leading-6">
                    Plazo: +5 dias
                </p>
              </div>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
