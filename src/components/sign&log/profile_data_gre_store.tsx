import { useEffect, useState } from "react";
import { ConfirmPassword, RegexVerify } from "../../controllers/sign_controller_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ButtonNavPage } from "./button_nav_pag_gre_sto";

export const ProfileData = () => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [passConfirm, setPassConfirm] = useState<string>("");

  const passwordVerify: boolean = useAppSelector(
    (state) => state.handler.password_verify.show
  );

  const passwordConfirm: boolean = useAppSelector(
    (state) => state.handler.password_confirm.show
  );

  const info = useAppSelector((state) => state.handler.info_user);

  const handlePassword = (data: string) => {
    RegexVerify(data, dispatch);
  };
  const handlePasswordConfirm = (data: string) => {
    ConfirmPassword(data, password, dispatch);
  };

  useEffect(() => {
    setEmail(info.profile.email != "" || info.profile.email != undefined ? info.profile.email : "")
    setPassConfirm(info.profile.password != "" || info.profile.password != undefined ? info.profile.password : "")
    setPassword(info.profile.password != "" || info.profile.password != undefined ? info.profile.password : "")
  }, [])
  

  return (
    <>
     <div className="border-y py-12 my-8" style={{ borderColor: "#C2A78D" }}>
      <label
        htmlFor="email"
        className="block text-sm  leading-6 text-gray-900 "
      >
        Correo electronico:
      </label>
      <div className="">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={info.profile.email === '' || info.profile.email === undefined ? email : info.profile.email}
          autoComplete="email"
          style={{ borderColor: "#9b5176", borderWidth: "3px" }}
          className="input input-bordered input-sm w-full"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="password"
            className="block text-sm leading-6 text-gray-900 "
          >
            Contrasena:
          </label>

          {!passwordVerify ? (
            <>
              <div className="">
                <input
                  type="password"
                  pattern="^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})\S{8,}$"
                  style={{
                    borderColor: "#9b5176",
                    borderWidth: "3px",
                  }}
                  className="input input-bordered input-sm w-full max-w-xs "
                  required
                  value={info.profile.password === '' || info.profile.password === undefined ? password : info.profile.password}
                  
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePassword(e.target.value);
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="">
                <input
                  type="password"
                  pattern="^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})\S{8,}$"
                  style={{
                    borderColor: "#9b5176",
                    borderWidth: "3px",
                  }}
                  className="input input-bordered input-error input-sm w-full max-w-xs "
                  required
                  value={info.profile.password === '' || info.profile.password === undefined ? password : info.profile.password}
                  
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePassword(e.target.value);
                  }}
                />
              </div>
            </>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="passwordTry"
            className="block text-sm leading-6 text-gray-900 "
          >
            Verificar contrasena:
          </label>

          {!passwordConfirm ? (
            <>
              <div className="">
                <input
                  type="password"
                  required
                  style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  className="input input-bordered input-sm w-full max-w-xs "
                  value={info.profile.password === '' || info.profile.password === undefined ? passConfirm : info.profile.password}
                  
                  onChange={(e) => {
                    setPassConfirm(e.target.value);
                    handlePasswordConfirm(e.target.value);
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="">
                <input
                  type="password"
                  required
                  style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  className="input input-bordered input-error input-sm w-full max-w-xs "
                  value={info.profile.password === '' || info.profile.password === undefined ? passConfirm : info.profile.password}
                  
                  onChange={(e) => {
                    setPassConfirm(e.target.value);
                    handlePasswordConfirm(e.target.value);
                  }}
                />

                <div className="label -mt-1 ">
                  <span></span>
                  <span className="label-text-alt text-sm text-red-800">
                    contrasenas no coinciden
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="sm:col-span-full">
          <h2 className="text-sm font-semibold leading-7">Notificaciones</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            -Existan al menos dos dígitos
            <br />
            -Existan al menos dos mayúsculas
            <br />
            -Existan al menos dos minúsculas
            <br />
          </p>
        </div>
      </div>
    </div>
    <ButtonNavPage data= {{email: email ? email : "" ,password:password ? password : ""}} ></ButtonNavPage> 
    </>
   
  );
};
