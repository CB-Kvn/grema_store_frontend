// import { useDispatch } from "react-redux"
// import { login_successful } from "../redux/reducers_slices/login_gre_sto_slice"

import { UserCircleIcon } from "@heroicons/react/24/outline";
import { countries } from "../../../src/utils/countries.json";
import { states } from "../../../src/utils/states.json";

import { useEffect, useState } from "react";

export const SignUp = () => {
  const [country, setCountry] = useState<number>(0);
  const [stated, setState] = useState<number>(0);

  const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(Number(e.target.value));
  };
  const handleChangeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(Number(e.target.value));
  };

  useEffect(() => {
    console.log(country);
    console.log(stated);
  }, [stated]);

  return (
    <>
      <div
        className="text-font-nav text-3xl flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        // style={{ fontFamily: "Dancing Script,cursive" }}
      >
        <div className="space-y-2">
          <div className="border-b pb-8" style={{ borderColor:"#C2A78D"}}>
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
                    placeholder="Type here"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs"
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
                    placeholder="Type here"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs"
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
                      Cedula de Residencial
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
                    placeholder="Type here"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs"
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
                    placeholder="Type here"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="telephone"
                  className="block text-sm leading-6 text-gray-900"
                >
                  Genero :
                </label>
                <div className="">
                  <input
                    type="text"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b  pb-8" style={{ borderColor:"#C2A78D"}}>
            <label
              htmlFor="email"
              className="block text-sm  leading-6 text-gray-900 mt-8"
            >
              Correo electronico:
            </label>
            <div className="">
              <input
                type="email"
                placeholder="Type here"
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                className="input input-bordered input-sm w-full max-w-xs"
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
                <div className="">
                  <input
                    type="password"
                    placeholder="Type here"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs "
                  />
                </div>

                
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
                    type="passwordTry"
                    placeholder="Type here"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    className="input input-bordered input-sm w-full max-w-xs "
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
            <h2 className="text-sm font-semibold leading-7">Notificaciones</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Todas las notificaciones sobre cambios, envios pagos entre otras
              noticias importantes, seran enviadas por el medio de correo
              electronico
            </p>
          </div>
            </div>
          </div>

          <div className="border-b pb-8" style={{ borderColor:"#C2A78D"}}>
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
                    className="select select-bordered select-sm w-full  max-w-xs"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    onChange={(e) => {
                      handleChangeCountry(e);
                    }}
                  >
                    <option disabled selected>
                    Pais / Nacion
                    </option>
                    {countries.map((element) => {
                      return (
                        <option value={element.id.toString()}>
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
                    className="select select-bordered select-sm w-full  max-w-xs"
                    style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                    id="state"
                    name="state"
                    autoComplete="state-name"
                    onChange={(e) => {
                      handleChangeState(e);
                    }}
                  >
                    <option disabled selected>
                    Estado / Provincia
                    </option>
                    {states.map((element) => {
                      if (element.id_country === country) {
                        return (
                          <option value={element.id}>{element.name}</option>
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
                className="block text-sm my-3  leading-6 text-gray-900"
              >
                Direccion exacta:
              </label>
              <div className="">
                <input
                  type="text"
                  placeholder="Type here"
                  style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  className="input input-bordered input-sm w-full max-w-xs"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block my-3 text-sm leading-6 text-gray-900"
              >
                ZIP / Codigo postal
              </label>
              <div className="">
                <input
                  type="text"
                  placeholder="Type here"
                  style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                  className="input input-bordered input-sm w-full max-w-xs"
                />
              </div>
            </div>
          </div>
          

          <div className="">
            <h2 className="text-sm font-semibold leading-7">Notificaciones</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Todas las notificaciones sobre cambios, envios pagos entre otras
              noticias importantes, seran enviadas por el medio de correo
              electronico
            </p>
          </div>
        </div>

        <div className="mt-6 flex  text-smitems-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
