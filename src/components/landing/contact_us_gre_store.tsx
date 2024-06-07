import { useState } from "react";
import { sendingEmail } from "../../controllers/landing_controller_gre_sto";
import { Alert } from "../alerts/alert_modal_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { alert_type } from "../../redux/reducers_slices/handler_gre_sto_slice";

export const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const dispatch = useAppDispatch()
  const alertType = useAppSelector((state)=>state.handler.alert.type)

  const sendEmailMsg = () => {
    sendingEmail(name, email, msg, setName, setMsg, setEmail);
  };

  return (
    <>
      <div className="flex pt-48 pb-64 container" id="contacts">
        <div className="sm:p-10 my-auto">
          <section className="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg">
            <div className="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
              <div className="col-span-4 bg-[#9D557A] bg-opacity-20 px-2 py-10 text-gray-800 md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
                <h2
                  className="text-4xl font-bold tracking-tight sm:text-6xl"
                  style={{
                    fontFamily: "Dancing Script,cursive",
                    color: "#393939",
                  }}
                >
                  Contactanos
                </h2>
                <ul className="my-5">
                  <li className="mb-6 flex items-start text-left">
                    <svg
                      className="shrink-0 mr-2 text-2xl text-[#9D557A]"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                      />
                    </svg>
                    <div>
                      <a
                        className="cursor-pointer font-serif text-xs sm:text-sm md:text-md lg:text-lg"
                        href="#"
                      >
                        grema.store.online@gmail.com
                      </a>
                      <span className="block text-xs uppercase">Email</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center text-left">
                    <svg
                      fill="#9D557A"
                      className=" shrink-0 mr-2 w-6 h-6"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                      stroke="#9D557A"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path>{" "}
                          <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>{" "}
                          <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path>{" "}
                          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div>
                      <a
                        className="cursor-pointer font-serif text-xs sm:text-sm md:text-md lg:text-lg"
                        href="#"
                      >
                        abrahama.real
                      </a>
                      <span className="block text-xs uppercase">Instagram</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center text-left">
                    <svg
                      viewBox="0 0 24 24"
                      className=" shrink-0 mr-2 w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9D557A"
                      stroke="#9D557A"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                          <path
                            fill-rule="nonzero"
                            d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div>
                      <p className="font-serif text-xs sm:text-sm md:text-md lg:text-lg">
                        abraham
                      </p>
                      <span className="block text-xs uppercase">Whatsapps</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                <form action="">
                  <div className="md:col-gap-4 mb-5 grid md:grid-cols-2">
                    <input
                      className="col-span-2 w-full  bg-transparent border-b py-3 text-sm outline-none focus:border-b-2 focus:border-[#9D557A]"
                      type="text"
                      placeholder="Nombre completo"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="col-span-1 w-full bg-transparent border-b py-3 text-sm outline-none focus:border-b-2 focus:border-[#9D557A]"
                      type="email"
                      placeholder="Correo electrónico"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <textarea
                    className="mb-10 w-full bg-transparent resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-[#9D557A]"
                    id=""
                    placeholder="Mensaje"
                    name="question"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>


                  <label
                    htmlFor="my_modal_90"
                    className="btn  btn-block mt-5 inline-flex items-center  justify-center rounded-md border-2 border-transparent bg-[#9d567a] bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#9d567a]  hover:bg-opacity-80"
                    
                    onClick={() =>{
                      sendEmailMsg()
                      dispatch(alert_type({ type: "msgToClient" }));
                    } }
                    
                  >
                    Enviar
                    <svg
                      className="group-hover:ml-8 ml-4 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                      />
                    </svg>
                  </label>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Alert typeAlert={alertType}></Alert>
    </>
  );
};
