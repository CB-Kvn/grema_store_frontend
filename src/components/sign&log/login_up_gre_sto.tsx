import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ToastAlert } from "../utils/toast_alert_gre_sto";
import { useState } from "react";
import { new_user_form } from "../../redux/reducers_slices/sign_up_gre_sto_slice";
import { loginController } from "../../controllers/login_gre_sto";

// import { useDispatch } from "react-redux"
// import { login_successful } from "../redux/reducers_slices/login_gre_sto_slice"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const activeToast = useAppSelector((state) => state.handler.toast.show);

  
  const handleLogin = async () => {
    loginController(
      dispatch,
      email,
      password,
      setEmail,
      setPassword,
    );
  };
  const handleModal = () => {
    dispatch(new_user_form({ show: true }));
  };

  return (
    <>
      <div className="flex  min-h-full flex-1 flex-col justify-center px-2 py-12 lg:px-2">
        {activeToast ? <ToastAlert></ToastAlert> : <></>}

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto "
            src="https://grema-store-frontend.vercel.app/images/Screenshot_1.png"
            alt="Your Company"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
                style={{
                  color: "#C2A78D",
                  fontSize: "medium",
                  fontWeight: "500",
                }}
              >
                Direccion de correo:
              </label>
              <div className="mt-2">
                {activeToast ? (
                  <input
                    type="email"
                    placeholder="Type here"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="input input-bordered input-error input-sm w-full max-w-md py-4"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                ) : (
                  <input
                    type="email"
                    placeholder="Type here"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="input input-bordered input-sm w-full max-w-md py-4"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  />
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                  style={{
                    color: "#C2A78D",
                    fontSize: "medium",
                    fontWeight: "500",
                  }}
                >
                  Contrasena:
                </label>
              </div>
              <div className="mt-2">
                {activeToast ? (
                  <input
                    type="email"
                    placeholder="Type here"
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    className="input input-bordered input-error input-sm w-full max-w-md py-4"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                ) : (
                  <input
                    type="password"
                    placeholder="Type here"
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    className="input input-bordered input-sm w-full max-w-md py-4 mb-2"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  />
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibol "
                    style={{
                      color: "#C2A78D",
                      fontSize: "medium",
                      fontWeight: "500",
                    }}
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
                className="flex w-full justify-center rounded-md bg-nav px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-btn-rose text-white"
                style={{
                  color: "white",
                  fontSize: "medium",
                  fontWeight: "500",
                  backgroundColor: "#C2A78D",
                }}
              >
                Iniciar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aun no eres miembro?{" "}
            <a
              onClick={() => {
                handleModal()
              }}
              className="font-semibold leading-6"
              style={{ color: "#9b5176" }}
            >
              Registrate!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
