import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { modal_type, shopCart_visible } from "../../redux/reducers_slices/handler_gre_sto_slice";
import { Link } from "react-router-dom";
import { Alerts } from "../alerts/alerts_guest_gre_sto";
// import { Alerts} from "../alerts/alerts_guest_gre_sto";

export const Carts = () => {
  const dispatch = useAppDispatch();
  const [id,setId] = useState<string>("")
  const login = useAppSelector((state)=>state.login)
  const open = useAppSelector((state) => state.handler.shopCart_visible.show);
  const shoppingCar  = useAppSelector(
    (state) => state.shopcar
  );

  const handleCartShopping = (open: boolean) => {
    dispatch(shopCart_visible({ show: open }));
  };
  const handlerOpen = () => {
    const element = document.querySelector("#my_modal_3") as HTMLInputElement;
    element.checked = true;
  };

  const handleCartShoppingRemove = (id:string)=>{
    handlerOpen()
    setId(id)
    dispatch(shopCart_visible({ show: false }));
  }

  useEffect(() => {
    dispatch(modal_type({type:"alert-eliminar-cart"}))
    
  }, [])
  

  return (
    <>
      {" "}
      
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            handleCartShopping(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
         
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className=" justify-center ml-4 flex lg:ml-0 mt-8">
                        <a href="#">
                        
                          <img
                            className="w-64 h-24 "
                            src="https://grema-store-frontend.vercel.app/images/logoH.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title
                            className="text-lg font-medium"
                            style={{ color: "#95806b" }}
                          >
                            Bolsa de Compras
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {
                                handleCartShopping(false);
                              }}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                                style={{ color: "#95806b" }}
                              />
                            </button>
                          </div>
                        </div>
                        

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {shoppingCar.data.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-50 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.images[0]}
                                      alt={product.nombre}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div
                                        className="flex justify-between text-base font-medium "
                                        style={{ color: "#95806b" }}
                                      >
                                        <h3>
                                          <a>{product.nombre}</a>
                                        </h3>
                                        <p className="ml-4">
                                         ₡ {product.precio -
                                            product.precio *
                                              (product.desc / 100)}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p
                                        className=""
                                        style={{ color: "#95806b" }}
                                      >
                                        Qty {product.quantyOrder}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium Remove"
                                          onClick={()=>{handleCartShoppingRemove(product.id)}}
                                        >
                                          <aside>
                                            <svg
                                              width="30px"
                                              height="30px"
                                              viewBox="-3 0 32 32"
                                              version="1.1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="#9B5176"
                                            >
                                              <g
                                                id="SVGRepo_bgCarrier"
                                                stroke-width="0"
                                              ></g>
                                              <g
                                                id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></g>
                                              <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <title>trash</title>{" "}
                                                <desc>
                                                  Created with Sketch Beta.
                                                </desc>{" "}
                                                <defs> </defs>{" "}
                                                <g
                                                  id="Page-1"
                                                  stroke="none"
                                                  stroke-width="1"
                                                  fill="none"
                                                  fill-rule="evenodd"
                                                >
                                                  {" "}
                                                  <g
                                                    id="Icon-Set"
                                                    transform="translate(-259.000000, -203.000000)"
                                                    fill="#9B5176"
                                                  >
                                                    {" "}
                                                    <path
                                                      d="M282,211 L262,211 C261.448,211 261,210.553 261,210 C261,209.448 261.448,209 262,209 L282,209 C282.552,209 283,209.448 283,210 C283,210.553 282.552,211 282,211 L282,211 Z M281,231 C281,232.104 280.104,233 279,233 L265,233 C263.896,233 263,232.104 263,231 L263,213 L281,213 L281,231 L281,231 Z M269,206 C269,205.447 269.448,205 270,205 L274,205 C274.552,205 275,205.447 275,206 L275,207 L269,207 L269,206 L269,206 Z M283,207 L277,207 L277,205 C277,203.896 276.104,203 275,203 L269,203 C267.896,203 267,203.896 267,205 L267,207 L261,207 C259.896,207 259,207.896 259,209 L259,211 C259,212.104 259.896,213 261,213 L261,231 C261,233.209 262.791,235 265,235 L279,235 C281.209,235 283,233.209 283,231 L283,213 C284.104,213 285,212.104 285,211 L285,209 C285,207.896 284.104,207 283,207 L283,207 Z M272,231 C272.552,231 273,230.553 273,230 L273,218 C273,217.448 272.552,217 272,217 C271.448,217 271,217.448 271,218 L271,230 C271,230.553 271.448,231 272,231 L272,231 Z M267,231 C267.552,231 268,230.553 268,230 L268,218 C268,217.448 267.552,217 267,217 C266.448,217 266,217.448 266,218 L266,230 C266,230.553 266.448,231 267,231 L267,231 Z M277,231 C277.552,231 278,230.553 278,230 L278,218 C278,217.448 277.552,217 277,217 C276.448,217 276,217.448 276,218 L276,230 C276,230.553 276.448,231 277,231 L277,231 Z"
                                                      id="trash"
                                                    >
                                                      {" "}
                                                    </path>{" "}
                                                  </g>{" "}
                                                </g>{" "}
                                              </g>
                                            </svg>
                                          </aside>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>₡ {shoppingCar.total}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link to={"/checkout"}>
                          <a
                            
                            className="flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium Check"
                          >
                            Proceder a pagar
                          </a>
                          </Link>
                          
                        </div>
                      </div>
                      
                    </div>
                    
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
            
          </div>
          
        </Dialog>
        
      </Transition.Root>
      <Alerts msg={{
        msg1:"Quieres eliminar el articulo de la bolsa?",
        msg2:"",
        msg3:"",
        msg4:"Eliminar!",
        id:id,
        type:"alert-eliminar-cart",
        login:login
      }}></Alerts> 
    </>
  );
};
