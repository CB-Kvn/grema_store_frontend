import { LazyLoadImage } from "react-lazy-load-image-component";

export const UserCard = () => {
  return (
    <>
      <div
        className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md mt-6 bg-white shadow-xl rounded-lg text-gray-900"
        style={{ backgroundColor: "rgb(246, 218, 239)" }}
      >
        <div className="rounded-t-lg h-32 overflow-hidden">
          <LazyLoadImage
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          ></LazyLoadImage>
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <LazyLoadImage
            className="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          ></LazyLoadImage>
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Sarah Smith</h2>
        </div>

        <div className="max-w-2xl mx-4 sm:max-w-sm  md:max-w-md  lg:max-w-md  xl:max-w-md  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-6 ">
          <div>
            <div
              className="mt-6 border-t  p-4"
              style={{ borderColor: "#9b5176" }}
            >
              <dl className="divide-y divide-gray-100">
                <div
                  className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 "
                  style={{ borderColor: "#9b5176" }}
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Nombre completo
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Margot Foster
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow"
                        placeholder="Nombre completo"
                      />
                    </label>
                  </dd>
                  <dd></dd>
                </div>
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  style={{ borderColor: "#9b5176" }}
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Identificacion
                    
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Backend Developer
                    
                  </dd>
                </div>
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  style={{ borderColor: "#9b5176" }}
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Correo Electronico
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    margotfoster@example.com
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow"
                        placeholder="Correo electronico"
                      />
                    </label>
                  </dd>
                </div>
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  style={{ borderColor: "#9b5176" }}
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Direccion Envio/Facturacion
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                    <textarea className="textarea textarea-bordered textarea-md w-full max-w-xs" placeholder="Direccion Envio/Facturacion"></textarea>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
