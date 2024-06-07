import { useNavigate } from "react-router-dom";



export const Promos = () => {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams();
  return (
    <div className="pt-48" id="promotions">
      <div className="relative overflow-hidden py-48 px-10" >
        <div className="">
          <div className="relative mx-auto max-w-7xl sm:static">
            <div className="sm:max-w-lg">
              <h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                style={{
                  fontFamily: "Dancing Script,cursive",
                  color: "#393939",
                }}
              >
                Visita nuestra seccion de descuentos y promociones!
              </h1>
              <p className="mt-4 text-xl text-gray-500" style={{
                
                  color: "#393939",
                }}>
                Aqui encontraras los mejores productos a precios bajos.
                Productos de temporadas pasadas entre otros.
              </p>
            </div>
            <div>
              <div className="pt-8">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/urixxsljqygxo8wiyyjy"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/gdswzruo0ti3hngah5lt"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/m58rtoqkgmluyonbrehk"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/jz5tseeipssxkcycxj5l"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/shwtg4ymdsojcqjdaiy2"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/otlciqb6wqwvse5zw3vv"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://res.cloudinary.com/denqtcsyy/image/upload/f_auto,q_auto/v1/photos-static-page/r5v1xuji9ttm0e539lho"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <label
                      id="promotions"
                      className="btn inline-flex items-center sm:ml-10 justify-center rounded-md border-2 border-transparent bg-[#9d567a] bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#9d567a]  hover:bg-opacity-80"
                      onClick={() => {
                        const descuento = "descuento"
                        searchParams.append("descuento",descuento)
                        navigate(`/store/1?${searchParams.toString()}`, {
                          replace: false,
                        });
                      }}                   
                    >
                   
                   Ir a los descuentos
                    </label>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
