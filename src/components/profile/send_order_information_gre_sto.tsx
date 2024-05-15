import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { updateUserController } from "../../controllers/profile_controller_gre_sto";

export const ProfileSendOrderInformation = () => {
  const login = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const styleInput =
    "w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1";
  const [changeInfo, setChangeInfo] = useState<boolean>(false);
  const [changeAddress, setChangeAddress] = useState<string>(login.address);
  const [changePhone, setChangePhone] = useState<string>(login.phone);
  const [changeId, setChangeId] = useState<string>(login.userId);

  const handleChangeInformation = () => {
    updateUserController(dispatch, login.userId, changeAddress, changePhone);
  };
  return (
    <>
      <div className=" px-8 my-10 max-w-screen-xl xl:mx-auto">
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
          <div className="col-span-12 rounded-xl bg-gray-50 bg-opacity-75  px-8 shadow">
            <div className="pt-4 flex items-center">
              <h1 className="py-2 text-2xl font-semibold">
                Detalles envio y facturacion
              </h1>

              {changeInfo ? (
                <button
                className="btn bg-[#9F587B] mt-3 inline-block ml-auto text-sm font-semibold text-white hover:text-[#9F587B] hover:bg-[#E5E7EB]" 
                  onClick={() => {
                    setChangeInfo(false), handleChangeInformation();
                  }}
                >
                  Guardar
                </button>
              ) : (
                <button className="btn bg-[#9F587B] mt-3 inline-block ml-auto text-sm font-semibold text-white hover:text-[#9F587B] hover:bg-[#E5E7EB]" onClick={() => {
                  setChangeInfo(true);
                }}>
                
                  Modificar
                </button>
              )}
            </div>
            <hr className="mt-4 mb-8" />

            <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
              <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
                <label className="block sm:col-span-2">
                  <p className="text-sm">Direccion de envio</p>
                  <textarea
                    className={
                      login.type === "guest" || changeInfo
                        ? styleInput
                        : styleInput +
                          " " +
                          "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    }
                    disabled={
                      login.type === "guest" || changeInfo ? false : true
                    }
                    placeholder={
                      login.type === "guest" || changeInfo ? "" : login.address
                    }
                    onChange={(e) => setChangeAddress(e.target.value)}
                    value={changeAddress}
                  />
                </label>
                <label className="block">
                  <p className="text-sm"># Identificacion</p>
                  <input
                    className={
                      login.type === "guest"
                        ? styleInput
                        : styleInput +
                          " " +
                          "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    }
                    disabled={
                      login.type === "guest" || changeInfo ? false : true
                    }
                    type="text"
                    placeholder={
                      login.type === "guest" || changeInfo ? "" : login.userId
                    }
                    onChange={(e) => setChangeId(e.target.value)}
                    value={login.type != "guest" || !changeInfo ? changeId : ""}
                  />
                </label>
                <label className="block">
                  <p className="text-sm"># Telefonico</p>
                  <input
                    className={
                      login.type === "guest"
                        ? styleInput
                        : styleInput +
                          " " +
                          "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    }
                    disabled={
                      login.type === "guest" || changeInfo ? false : true
                    }
                    type="text"
                    placeholder={
                      login.type === "guest" || changeInfo
                        ? ""
                        : "+506 " + login.phone
                    }
                    onChange={(e) => setChangePhone(e.target.value)}
                    value={"+506 " + changePhone}
                  />
                </label>
              </div>
            </div>

            <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
              <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">
                Historial de Ordenes de Compras
              </p>
              <table className="w-full">
                <thead>
                  <td className="text-center font-semibold">Fecha</td>
                  <td className="text-center font-semibold"># Orden</td>
                  <td className="text-center font-semibold">Monto</td>
                  <td className="text-center font-semibold"></td>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b py-2 text-center text-sm">
                      23 Nov 2021
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      X-543242
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      $99.00
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      <button className="text-sm text-blue-600 underline">
                        PDF
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 text-center text-sm">
                      23 Nov 2021
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      X-543242
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      $99.00
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      <button className="text-sm text-blue-600 underline">
                        PDF
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 text-center text-sm">
                      23 Nov 2021
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      X-543242
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      $99.00
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      <button className="text-sm text-blue-600 underline">
                        PDF
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-2 text-center text-sm">
                      23 Nov 2021
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      X-543242
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      $99.00
                    </td>
                    <td className="border-b py-2 text-center text-sm">
                      <button className="text-sm text-blue-600 underline">
                        PDF
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
