/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import "../nav-bar-styles.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selected_product } from "../../redux/reducers_slices/products_gre_sto_slice";
import { ShowProduct } from "../../interfaces/products_interface_gre_sto";
import { useNavigate } from "react-router-dom";
import { discount_active } from "../../redux/reducers_slices/handler_gre_sto_slice";

export const InlineProducts = () => {
  const dispatch  = useAppDispatch()
  const navigate = useNavigate();
  const login = useAppSelector((state)=>state.login)
  const productsData = useAppSelector(
    (state) => state.products.dataShowProducts.data
  );
  const [category, setCategory] = useState<string>("aretes");

  const showProduct = (product:ShowProduct) =>{

      dispatch(selected_product({data:{
        id:product.id,
        userId:login.userId,
        productId: product.productId,
        nombre:product.product.name,
        precio:product.price,
        quantyInv:product.quantity,
        desc:product.desc,
        description:product.product.description,
        images:product.image,
        quantyOrder:0,
        type:product.typeDesc,
        color:product.product.color ,
        shape: product.product.shape,
        category: product.product.category,
      }}))
      dispatch(discount_active({enable:true}))
      navigate(`/store-product/${product.id}`, {
        replace: false,
      });
      
  } 

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);
  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <>
      {productsData && (
        <div className="pt-48" id="store-pre">
          <div className="text-center">
            <h2
              className="text-4xl font-bold tracking-tight sm:text-7xl"
              style={{ fontFamily: "Dancing Script,cursive", color: "#393939" }}
            >
              Productos Destacados
            </h2>
            <p className="mt-1 text-lg leading-8" style={{ color: "#393939" }}>
              Tenemos gran variedad de productos listos para ser entregados
            </p>
          </div>

          <div className="navbar justify-center">
            <div className="navbar-center flex">
              <ul
                className="menu menu-horizontal text-xs menux sm:text-2xl"
                style={{ color: "#393939" }}
              >
                <li className="" onClick={() => setCategory("aretes")}>
                  <aside className="" style={{ paddingRight: "0.45rem" }}>
                    Aretes
                  </aside>
                </li>
                <li className="" onClick={() => setCategory("pulseras")}>
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem", paddingRight: "0.45rem" }}
                  >
                    Pulseras
                  </aside>
                </li>
                <li className="" onClick={() => setCategory("collares")}>
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem", paddingRight: "0.45rem" }}
                  >
                    Collares
                  </aside>
                </li>
                <li className="" onClick={() => setCategory("anillos")}>
                  <aside className="" style={{ paddingLeft: "0.45rem" }}>
                    Anillos
                  </aside>
                </li>
                <li className="" onClick={() => setCategory("sets")}>
                  <aside
                    className=""
                    style={{ paddingLeft: "0.45rem", paddingRight: "0.45rem" }}
                  >
                    Sets
                  </aside>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid justify-center w-100 px-10">
            
              {productsData[category] && (
                <div className="carousel rounded-box w-100">
                  {productsData[category].map((product: any) => (
                    <div className="carousel-item w-1/3 mx-0.5 sm:w-1/3 md:w-1/4 " onClick={()=>showProduct(product)}>
                      <div key={product.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-30 sm:overflow-x-auto rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                        >
                          <img
                            src={product.image[0]}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 px-3 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a>
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                {product.product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.product.color}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {new Intl.NumberFormat("es-CR", {
                              style: "currency",
                              currency: "CRC",
                              maximumFractionDigits: 0,
                              minimumFractionDigits: 0,
                            }).format(
                              Number(product!.price) -
                                Number(product!.price) * (product!.desc / 100)
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            
          </div>
        </div>
      )}
    </>
  );
};
