import { loginService } from "../services/login_service_gre_store";
import { login_successful } from "../redux/reducers_slices/login_gre_sto_slice";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { ToastAlert } from "./toast_alert_gre_sto";
import { useState } from "react";
import { toast_visible } from "../redux/reducers_slices/toast_gre_sto_slice";
import { new_user_form } from "../redux/reducers_slices/sign_up_gre_sto_slice";
// import { useDispatch } from "react-redux"
// import { login_successful } from "../redux/reducers_slices/login_gre_sto_slice"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const activeToast = useAppSelector((state) => state.toast.show);

  const showToast = (msg:string,show: boolean) => {
    dispatch(toast_visible({ msg: msg, show: show }));
  };

  const handleLogin = async () => {
    // document.querySelector("#my_modal_7").checked = false;
    const response = await loginService({ email, password });
    if (response.data.msg! === "Found User") {
      const element = document.querySelector("#my_modal_7") as HTMLInputElement ;
      element.checked = false
      dispatch(login_successful(response.data));
      setEmail('')
      setPassword('')
    } else {
      showToast("Email or password error",true);
      setTimeout(() => {
        showToast('',false);
      }, 15000);
    }
      
  };

  const handleSignUp = () =>{
    dispatch(new_user_form({show: true }));
  }

  return (
    <>
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {activeToast ? <ToastAlert></ToastAlert> : <></>}

        <div className=" bg-nav sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-13 w-auto"
            src="https://grema-store-frontend.vercel.app/images/Screenshot_1.png"
            alt="Your Company"
          />

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Direccion de correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contrasena
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contrasena
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Has olvidado tu contrasena?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  handleLogin();
                }}
                className="flex w-full justify-center rounded-md bg-nav px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aun no eres miembro?{" "}
            <a
              onClick={()=>{ handleSignUp(), console.log("Nuevo usuario")}}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Registrate!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
