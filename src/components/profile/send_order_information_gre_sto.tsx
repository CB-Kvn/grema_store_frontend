import { useAppSelector } from "../../redux/store";

export const ProfileSendOrderInformation = () => {
  const login = useAppSelector((state)=>state.login)
  return (
    <>
      <div className=" px-8 my-10 max-w-screen-xl xl:mx-auto">
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
          <div className="col-span-12 rounded-xl sm:bg-gray-50  sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">Detalles envio y facturacion</h1>
             
            </div>
            <hr className="mt-4 mb-8" />

            <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
              <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
                <label className="block sm:col-span-2">
                  <p className="text-sm">Direccion de envio</p>
                  <textarea
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    
                    disabled
                    placeholder={login.address}
                  />
                </label>
                <label className="block">
                  <p className="text-sm"># Identificacion</p>
                  <input
                    className="w-full rounded-md border  bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    type="text"
                    disabled
                    placeholder={login.userId.toString()}
                  />
                </label>
                <label className="block">
                  <p className="text-sm"># Telefonico</p>
                  <input
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    type="text"
                    disabled
                    placeholder={"+506 " + login.phone}
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
