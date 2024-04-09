/* eslint-disable @typescript-eslint/no-unused-vars */

import { countries } from "../../../src/utils/countries.json";
import { states } from "../../../src/utils/states.json";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ButtonNavPage } from "./button_nav_pag_gre_sto";

export const AddressInfo = () => {
  const dispatch = useAppDispatch();

  const [country, setCountry] = useState<string>("");
  const [idCountry, setIdCountry] = useState<number>(0);
  const [state, setState] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [codePostal, setCodePostal] = useState<string>("");
  const info = useAppSelector((state)=>state.handler.info_user)

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

  useEffect(() => {
    setCountry(info.address.country != "" || info.address.country != undefined ? info.address.country : "")
    setState(info.address.state != "" || info.address.state != undefined ? info.address.state : "")
    setAddress(info.address.address != "" || info.address.address != undefined ? info.address.address : "")
    setCodePostal(info.address.code != "" || info.address.code != undefined ? info.address.code : "")
  }, [])
  

  return (
    <>
     
        <div className="border-b border-t pt-5 pb-14 my-8" style={{ borderColor: "#C2A78D" }}>
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
                  value={info.address.country === '' || info.address.country === undefined ? country : info.address.country}
                  autoComplete="country-name"
                  placeholder="Pais / Nacion"
                  onChange={(e) => {
                    handleChangeCountry(e);
                  }}
                >
                  {countries.map((element, index) => {
                    return (
                      <option value={[element.id.toString(), index.toString()]}>
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
                  value={info.address.state === '' || info.address.state === undefined ? state : info.address.state}
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
                className="textarea textarea-bordered textarea-sm mb-3 w-full "
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                required
                value={info.address.address === '' || info.address.address === undefined ? address : info.address.address}
                onChange={(e) => {
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
                value={info.address.code === '' || info.address.code === undefined ? codePostal : info.address.code}
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                className="input input-bordered input-sm w-full"
                onChange={(e) => {
                  setCodePostal(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <ButtonNavPage data= {{country:country,state:state,address:address,code:codePostal}} ></ButtonNavPage>
      
    </>
  );
};
