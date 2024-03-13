// import { useDispatch } from "react-redux"
// import { login_successful } from "../redux/reducers_slices/login_gre_sto_slice"

import { UserCircleIcon } from "@heroicons/react/24/outline";
import { countries } from "../../../src/utils/countries.json";
import { states } from "../../../src/utils/states.json";

import { useState } from "react";
import { RegexVerify, SignController } from "../../controllers/sign_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const SignUp = ({ location }: { location: string }) => {
  const dispatch = useAppDispatch();

  const [country, setCountry] = useState<string>("");
  const [idCountry, setIdCountry] = useState<number>(0);
  const [stated, setState] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [celphone, setCelphone] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [codePostal, setCodePostal] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const passwordVerify: boolean = useAppSelector(
    (state) => state.handler.password_verify.show
  );

  const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const x = e.target.value;
    const numbers = x.split(",");
    const y = e.target.options[Number(numbers[1])];
    setIdCountry(Number(numbers[0]));
    setCountry(y.text);
  };
  const handleChangeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const x = e.target.value;
    console.log(x);
    setState(x);
  };
  const handlePassword = (data: string) => {
    RegexVerify(data, dispatch);
  };

  const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const z = e.target.value;
    console.log(z);
    setGenre(z);
  };
  const handleSave = (location: string) => {
    const data = {
      id: Number(id),
      name: name,
      lastName: lastname,
      genre: genre,
      cellphone: celphone,
      profile: {
        email: email,
        password: password,
        address:
          country +
          ", " +
          stated +
          ", " +
          address +
          ", codigo postal: " +
          codePostal,
        image: image,
      },
    };

    SignController(data, dispatch, location);
  };

  return (
    <>
      <div
        className="text-font-nav text-3xl flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        // style={{ fontFamily: "Dancing Script,cursive" }}
      >
        <form>
          <div className="space-y-2">
            <div className="border-b pb-8" style={{ borderColor: "#C2A78D" }}>
              <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full justify-self-center">
                  <div className="mt-2 flex justify-center items-center gap-x-3">
                    <UserCircleIcon
                      className="h-28 w-28 btn-rose justify-center"
                      color="#9b5176"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-x-3">
                    <input
                      type="file"
                      className="file-input file-input-sm w-full max-w-xs "
                      onBlur={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="first-name"
                    className="block text-sm  leading-6 text-gray-900"
                  >
                    Nombre :
                  </label>
                  <div className="">
                    <input
                      type="text"
                      required
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      className="input input-bordered input-sm w-full max-w-xs"
                      onBlur={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm  leading-6 text-gray-900"
                  >
                    Apellidos :
                  </label>
                  <div className="">
                    <input
                      type="text"
                      required
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      className="input input-bordered input-sm w-full max-w-xs"
                      onBlur={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="type-id"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Tipo identificacion :
                  </label>
                  <div className="">
                    <select
                      className="select select-bordered select-sm w-full  max-w-xs"
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    >
                      <option disabled selected>
                        Tipo identificacion
                      </option>
                      <option value="Cedula de Residencial">
                        Cedula de Residencial
                      </option>
                      <option value="Cedula de Nacional">
                        Cedula de Nacional
                      </option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="id"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Numero identificacion :
                  </label>
                  <div className="">
                    <input
                      type="text"
                      required
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      className="input input-bordered input-sm w-full max-w-xs"
                      onBlur={(e) => {
                        setId(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="telephone"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Numero celular :
                  </label>
                  <div className="">
                    <input
                      type="text"
                      required
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      className="input input-bordered input-sm w-full max-w-xs"
                      onBlur={(e) => {
                        setCelphone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="type-id"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Genero :
                  </label>
                  <div className="">
                    <select
                      className="select select-bordered select-sm w-full  max-w-xs"
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      onChange={(e) => {
                        handleGenre(e);
                      }}
                    >
                      <option value="Cedula de Residencial">Femenino</option>
                      <option value="Cedula de Nacional">Masculino</option>
                      <option value="Cedula de Nacional">Np aplica</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b  pb-8" style={{ borderColor: "#C2A78D" }}>
              <label
                htmlFor="email"
                className="block text-sm  leading-6 text-gray-900 mt-8"
              >
                Correo electronico:
              </label>
              <div className="">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onBlur={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3  justify-self-start text-start ">
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
                          style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                          className="input input-bordered input-sm w-full max-w-xs "
                          required
                          onChange={(e) => {
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
                          style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                          className="input input-bordered input-error input-sm w-full max-w-xs "
                          required
                          onChange={(e) => {
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
                  <div className="sm:col-span-3">
                    <input
                      type="password"
                      required
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      className="input input-bordered input-sm w-full max-w-xs "
                      onBlur={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-full">
                  <h2 className="text-sm font-semibold leading-7">
                    Notificaciones
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Existan al menos dos dígitos-Existan al menos dos
                    mayúsculas-Existan al menos dos minúsculas
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b pb-8" style={{ borderColor: "#C2A78D" }}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Pais / Nacion
                  </label>
                  <div className="">
                    <select
                      required
                      className="select select-bordered select-sm w-full my-3  max-w-xs"
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      placeholder="Pais / Nacion"
                      onChange={(e) => {
                        handleChangeCountry(e);
                      }}
                    >
                      {countries.map((element, index) => {
                        return (
                          <option
                            value={[element.id.toString(), index.toString()]}
                          >
                            {element.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="region"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Estado / Provincia
                  </label>
                  <div className="">
                    <select
                      required
                      className="select select-bordered select-sm w-full my-3 max-w-xs"
                      style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                      id="state"
                      name="state"
                      autoComplete="state-name"
                      onChange={(e) => {
                        handleChangeState(e);
                      }}
                    >
                      {states.map((element) => {
                        if (element.id_country === idCountry) {
                          return (
                            <option value={element.name}>{element.name}</option>
                          );
                        }
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm mt-3 leading-6 text-gray-900"
                >
                  Direccion exacta:
                </label>
                <div className="">
                  <textarea
                    className="textarea textarea-bordered textarea-sm mb-3 w-full max-w-xs"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    required
                    onBlur={(e) => {
                      setAddress(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block mt-3 text-sm leading-6 text-gray-900"
                >
                  ZIP / Codigo postal
                </label>
                <div className="">
                  <input
                    type="text"
                    required
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs"
                    onBlur={(e) => {
                      setCodePostal(e.target.value);
                    }}
                  />
                </div>
              </div>
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
          </div>

          <div className="mt-6 flex  text-smitems-center justify-end gap-x-6">
            <button
              type="submit"
              className=" flex w-full btn btn-active btn-neutral mt-4 btn-sm"
              style={{
                backgroundColor: "#F6DAEF",
                borderColor: "#9b5176",
                color: "#95806b",
              }}
              onClick={() => {
                handleSave(location);
              }}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
