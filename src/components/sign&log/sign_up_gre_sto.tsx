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
          <div className="border-b border-btn-rose/95 pb-8">
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
                  className="block text-lg  leading-6 text-gray-900"
                >
                  Nombre:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md p-2 border-btn-rose py-1.5  shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-lg   leading-6 text-gray-900"
                >
                  Apellidos:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full p-2 rounded-md border-0 py-1.5  shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 ">
                <label
                  htmlFor="type-id"
                  className="block text-lg  leading-6 text-gray-900"
                >
                  Tipo de ID:
                </label>
                <div className="mt-2">
                  <select
                    id="type-id"
                    name="type-id"
                    onChange={(e) => {
                      handleChangeCountry(e);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
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
                  className="block text-lg  leading-6 text-gray-900"
                >
                  # de ID:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="id"
                    id="id"
                    autoComplete="id"
                    className="block w-full p-2 rounded-md border-0 py-1.5  shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 ">
                <label
                  htmlFor="telephone"
                  className="block text-lg  leading-6 text-gray-900"
                >
                  # celular
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    autoComplete="telephone"
                    className="block w-full p-2 rounded-md border-0 py-1.5  shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-lg text-center  leading-6 text-gray-900"
                >
                  Sobre ti.
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full p-2 rounded-md border-0 py-1.5   ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2  focus:ring-nav sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-btn-rose/95 pb-8">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3  justify-self-start text-start ">
                <label
                  htmlFor="email"
                  className="block text-lg  leading-6 text-gray-900 my-3"
                >
                  Correo electronico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-52 p-2 col-span-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:col-span-3 sm:text-sm sm:leading-6"
                  />
                </div>

                <label
                  htmlFor="password"
                  className="block text-lg  leading-6 text-gray-900 my-3"
                >
                  Contrasena
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <label
                  htmlFor="passwordTry"
                  className="block text-lg  leading-6 text-gray-900 my-3"
                >
                  Verificar contrasena
                </label>
                <div className="mt-2">
                  <input
                    id="passwordTry"
                    name="passwordTry"
                    type="password"
                    autoComplete="passwordTry"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3  text-justify ml-3 mt-24">
                
                  <ol type="A" className="text-sm">
                    <li>+ freeCodeCamp</li>
                    <li>CSS-Tricks</li>
                    <li>Traversy Media</li>
                  </ol>
                
              </div>
            </div>
          </div>

          <div className="border-b border-btn-rose/95 pb-8">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-lg  leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    onChange={(e) => {
                      handleChangeCountry(e);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
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
                  className="block text-lg  leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <select
                    id="state"
                    name="state"
                    autoComplete="state-name"
                    onChange={(e) => {
                      handleChangeState(e);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
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
                className="block text-lg my-3  leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block my-3 text-lg  leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-btn-rose placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold leading-7 mt-6">
              Notificaciones
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Todas las notificaciones sobre cambios, envios pagos entre otras
              noticias importantes, seran enviadas por el medio de correo
              electronico
            </p>
          </div>
        </div>

        <div className="mt-6 flex  text-lg items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-lg  font-semibold text-white shadow-sm hover:bg-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-lg  font-semibold text-white shadow-sm hover:bg-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
