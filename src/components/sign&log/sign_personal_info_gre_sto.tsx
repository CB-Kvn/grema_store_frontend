/* eslint-disable @typescript-eslint/no-unused-vars */


import { UserCircleIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";

import { useAppSelector } from "../../redux/store";
import { ButtonNavPage } from "./button_nav_pag_gre_sto";

export const SignPersonalInfo = () => {
  

  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [celphone, setCelphone] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  // const [setImage] = useState<File>();
  const info = useAppSelector((state) => state.handler.info_user);

  const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const z = e.target.value;
    console.log(z);
    setGenre(z);
  };

  // const handleImages = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //   // console.log(e);

  //   if (e.target.files === undefined) return;

  //   const target = e.target as HTMLInputElement & {
  //     files: FileList;
  //   };

  //   setImage(target.files[0]!);

  //   // const data = new FormData()
  //   // data.append('images', image!)

  //   // axios.post('http://localhost:5000/grema-store/product/upload',data)
  //   // console.log(target.files)
  // };

  useEffect(() => {
    setName(info.personal.name != "" || info.personal.name != undefined ? info.personal.name : "")
    setLastName(info.personal.lastName != "" || info.personal.lastName != undefined ? info.personal.lastName : "")
    setId(info.personal.id != "" || info.personal.id != undefined ? info.personal.id : "")
    setCelphone(info.personal.cellphone != "" || info.personal.cellphone != undefined ? info.personal.cellphone : "")
    setGenre(info.personal.genre != "" || info.personal.genre != undefined ? info.personal.genre : "")
  }, [])
  

  return (
    <>
      <div
        className="border-b border-t py-8 my-8"
        style={{ borderColor: "#C2A78D" }}
      >
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
                // onBlur={(e) => {
                //   // handleImages(e);
                // }}
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
                value={
                  info.personal.name === "" || info.personal.name === undefined
                    ? name
                    : info.personal.name
                }
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={(e) => {
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
                value={
                  info.personal.lastName === "" ||
                  info.personal.lastName === undefined
                    ? lastname
                    : info.personal.lastName
                }
                required
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={(e) => {
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
                <option value="Cedula de Nacional">Cedula de Nacional</option>
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
                value={
                  info.personal.id === "" ||
                  info.personal.id === undefined
                    ? id
                    : info.personal.id
                }
                required
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={(e) => {
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
                value={
                  info.personal.cellphone === "" ||
                  info.personal.cellphone === undefined
                    ? celphone
                    : info.personal.cellphone
                }
                required
                style={{ borderColor: "#9b5176", borderWidth: "3px" }}
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={(e) => {
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
                value={
                  info.personal.genre === "" ||
                  info.personal.genre === undefined
                    ? genre
                    : info.personal.genre
                }
              >
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="No indica">No indica</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <ButtonNavPage
        data={{
          id: id,
          name: name,
          lastName: lastname,
          cellphone: celphone,
          genre: genre,
        }}
      ></ButtonNavPage>
    </>
  );
};
