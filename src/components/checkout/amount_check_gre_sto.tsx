import { useEffect, useState } from "react";
import { checkoutOrder } from "../../controllers/checkout_controller_gre_sto";
import { User } from "../../interfaces/user_interface_gre_sto";
import { useAppSelector } from "../../redux/store";
import { GuestCheck } from "../../interfaces/login_interface_gre_sto";
import { formatPhoneNumber } from "../../utils/format_phone_number";

export const AmountCheck = () => {
  const prodCheck = useAppSelector((state) => state.shopcar);
  const login = useAppSelector((state) => state.login);
  const infoUser: User = useAppSelector((state) => state.handler.info_user);
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [tax, setTax] = useState<number>(0);
  const [change,setChange]= useState<boolean>(false);

  const checkOut = () => {
    const dataGuest: GuestCheck = {
      id,
      email,
      name,
      phone,
      address,
      tax,
    };
    checkoutOrder(infoUser, prodCheck, login, dataGuest);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedNumber);
  };

  useEffect(() => {
    setTax((prodCheck.total + prodCheck.envio_price) * 0.13);
  }, [prodCheck.envio_price]);

  return (
    <>
      <div className="mt-10 grid grid-cols-8 px-6 sm:grid-cols-10">
        <div className="col-span-12 overflow-hidden rounded-xl bg-gray-50 bg-opacity-75 px-8 pt-6 pb-8 shadow">
          <div className=" bg-gray-50 bg-opacity-20">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-medium">Detalles de envio</p>
                <p className="text-gray-400">
                  Completa o revisa los datos de envio.
                </p>
              </div>

              {login.type != "guest" ? (
                <button className="inline-block ml-auto text-sm font-semibold text-[#9F587B] underline decoration-2 hover:text-[#7e7e80]" onClick={()=>{setChange(true) } }>
    
                  Modificar
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="">
              <label className="mt-4 mb-2 block text-sm font-medium">
                Correo electronico
              </label>
              <div className="flex">
                <div className="relative w-10/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    disabled={login.type === "guest" ? false : true}
                    name="card-no"
                    className="w-full rounded-md border border-[#9C5478]  px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={
                      login.type === "guest" ? "Escribe tu email" : login.email
                    }
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <label className="mt-4 mb-2 block text-sm font-medium">
                Nombre completo
              </label>
              <div className="flex">
                <div className="relative w-10/12 flex-shrink-0">
                  <input
                    type="text"
                    disabled={login.type === "guest" ? false : true}
                    id="card-no"
                    name="card-no"
                    className="w-full rounded-md border border-[#9C5478]  px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={
                      login.type === "guest" ? "Escribe tu nombre" : login.name
                    }
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <label className="mt-4 mb-2 block text-sm font-medium">
                # Identificacion
              </label>
              <div className="flex">
                <div className="relative w-10/12 flex-shrink-0">
                  <input
                    type="text"
                    disabled={login.type === "guest" ? false : true}
                    id="card-no"
                    name="card-no"
                    className="w-full rounded-md border border-[#9C5478]  px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={
                      login.type === "guest"
                        ? "Escribe tu # identificación"
                        : login.userId
                    }
                    onChange={(e) => setId(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <label className="mt-4 mb-2 block text-sm font-medium">
                # Telefonico
              </label>
              <div className="flex">
                <div className="relative w-10/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    disabled={login.type === "guest" ? false : true}
                    name="card-no"
                    className="w-full rounded-md border border-[#9C5478]  px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={
                      login.type === "guest" ? "00-00-00-00" : login.phone
                    }
                    value={phone === "" ? "" : phone}
                    onChange={(e) => handleChange(e)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                          stroke="#9ca3af"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <label className="mt-4 mb-2 block text-sm font-medium">
                Direccion envio / Facturacion
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 w-10/12">
                  <textarea
                    id="billing-address"
                    disabled={login.type === "guest" ? false : true}
                    name="billing-address"
                    className="w-full rounded-md border border-[#9C5478] py-6 pl-10 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={login.address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <div className="pointer-events-none absolute pt-6 left-0 inline-flex items-center px-3">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 8.4666669 8.4666669"
                      id="svg8"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9CA3AF"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs id="defs2"></defs>{" "}
                        <g id="layer1" transform="translate(0,-288.53332)">
                          {" "}
                          <path
                            d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                            id="path929"
                            transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    {new Intl.NumberFormat("es-CR", {
                      style: "currency",
                      currency: "CRC",
                    }).format(prodCheck.total)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Envio</p>
                  <p className="font-semibold text-gray-900">
                    {new Intl.NumberFormat("es-CR", {
                      style: "currency",
                      currency: "CRC",
                    }).format(prodCheck.envio_price)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    Imp ventas 13%
                  </p>
                  <p className="font-semibold text-gray-900">
                    {new Intl.NumberFormat("es-CR", {
                      style: "currency",
                      currency: "CRC",
                    }).format(tax)}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {new Intl.NumberFormat("es-CR", {
                    style: "currency",
                    currency: "CRC",
                  }).format(prodCheck.total + prodCheck.envio_price)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <label
                htmlFor="my_modal_90"
                className="btn btn-block inline-flex items-center  justify-center rounded-md border-2 border-transparent bg-[#9d567a] bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#9d567a]  hover:bg-opacity-80"
                onClick={() => {
                  checkOut();
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon h-5 w-5"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M182.87 146.29h585.14v292.57h73.14V73.14H109.72v877.72h402.29v-73.15H182.87z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M713.14 481.52L512 582.1v88.24c0 110.29 62.31 211.11 160.95 260.43l40.19 20.09 40.19-20.09c98.64-49.32 160.95-150.14 160.95-260.43V582.1L713.14 481.52z m128 188.81c0 83.12-46.18 157.84-120.52 195.01l-7.48 3.74-7.48-3.74c-74.34-37.17-120.52-111.9-120.52-195.01V627.3l128-64 128 64v43.03z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M657.87 683.21l-36.33 41.11 93.25 82.43 113.93-131.09-41.39-36L709.69 729zM256 256h438.86v73.14H256zM256 438.86h292.57V512H256zM256 621.71h146.29v73.14H256z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
                Realizar orden
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
