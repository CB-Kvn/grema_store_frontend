/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { BannerSpecial } from "./banner_special_gre_sto";
import { Alert } from "../alerts/alert_modal_gre_sto";
import { alert_type } from "../../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addSelectionOrder } from "../../controllers/shopCar_controller_gre_sto";
import { ProductSelect } from "../../interfaces/products_interface_gre_sto";

export const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state)=>state.login)
  const [counter, setCounter] = useState<number>(0);
  const [photo, setPhoto] = useState<string>("");
  const alert = useAppSelector((state)=>state.handler.alert.type)
  const productSelected = useAppSelector(
    (state) => state.products.dataSelected
  );
  const Increment = () => {
    let num = 0;
    num = counter + 1;
    if (productSelected!.quantyInv >= num) {
      setCounter(num);
    }
  };
  const Decrement = () => {
    if (counter > 0) {
      let num = 0;
      num = counter - 1;
      setCounter(num);
    }
  };

  const changeImage = (photo: string) => {
    setPhoto(photo);
  };

  const order = (data:ProductSelect,counter:number) =>{
    addSelectionOrder(data,dispatch,counter,login)
}

  useEffect(() => {
    if (productSelected && productSelected.images.length > 0) {
      setPhoto(productSelected.images[0]);
    }
  }, [productSelected]);

  return (
    <>
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="">
          <div className="container mx-auto px-4">
            <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
              <div className="col-span-2 sm:mx-auto sm:col-span-1 md:col-span-1 lg:col-span-3 lg:row-end-1">
                <div className="lg:flex lg:items-start">
                  <div className="lg:order-2 lg:ml-5">
                    <div className="max-w-screen-xxxs overflow-hidden rounded-lg">
                      {photo ? (
                        <img
                          className="h-full w-full max-w-full object-cover"
                          src={photo}
                          alt=""
                        />
                      ) : (
                        <></>
                      )}
                      <BannerSpecial
                        type={productSelected!.type!}
                      ></BannerSpecial>
                    </div>
                  </div>

                  <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                    <div className="flex flex-row items-start lg:flex-col">
                      <button
                        type="button"
                        className="btn flex-0 aspect-square mb-3 h-20 w-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center relative"
                        onClick={() => changeImage(productSelected!.images[0])}
                      >
                        {productSelected?.images[0] && (
                          <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src={productSelected.images[0]}
                            alt="Producto"
                          />
                        )}
                      </button>
                      <button
                        type="button"
                        className="btn flex-0 aspect-square mb-3 h-20 w-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center relative"
                        onClick={() => changeImage(productSelected!.images[1])}
                      >
                        {productSelected?.images[1] && (
                          <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src={productSelected.images[1]}
                            alt="Producto"
                          />
                        )}
                      </button>
                      <button
                        type="button"
                        className="btn flex-0 aspect-square mb-3 h-20 w-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center relative"
                        onClick={() => changeImage(productSelected!.images[2])}
                      >
                        {productSelected?.images[2] && (
                          <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src={productSelected.images[2]}
                            alt="Producto"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 col-span-2 sm:col-span-1   md:col-span-1  lg:col-span-2 lg:row-span-2 lg:row-end-2 sm:0 md:ml-10 sm:mt-0 xxs:ml-14">
                <h1
                  className="md: text-4xl font-bold text-gray-900 lg:text-4xl"
                  style={{
                    fontFamily: "Dancing Script,cursive",
                    color: "#393939",
                  }}
                >
                  {productSelected?.nombre}
                </h1>
                <ul className="mt-8 space-y-2">
                  <li className="flex items-center text-left text-sm font-medium text-gray-600">
                    <i className="mr-3">
                      <svg
                        fill="#9f587b"
                        height="20px"
                        width="20px"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 470 470"
                        enable-background="new 0 0 470 470"
                        stroke="#9f587b"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M432.5,0h-395C16.822,0,0,16.822,0,37.5v395C0,453.178,16.822,470,37.5,470h395c20.678,0,37.5-16.822,37.5-37.5v-395 C470,16.822,453.178,0,432.5,0z M455,432.5c0,12.407-10.093,22.5-22.5,22.5h-395C25.093,455,15,444.907,15,432.5v-395 C15,25.093,25.093,15,37.5,15h395c12.407,0,22.5,10.093,22.5,22.5V432.5z"></path>{" "}
                            <path d="m178.504,215.993c20.678,0 37.5-16.822 37.5-37.5v-58c0-20.678-16.822-37.5-37.5-37.5h-58c-20.678,0-37.5,16.822-37.5,37.5v58c0,20.678 16.822,37.5 37.5,37.5h58zm-80.5-37.5v-58c0-12.407 10.093-22.5 22.5-22.5h58c12.407,0 22.5,10.093 22.5,22.5v58c0,12.407-10.093,22.5-22.5,22.5h-58c-12.406,0-22.5-10.094-22.5-22.5z"></path>{" "}
                            <path d="m432.488,30l-394.9-.024c-0.994,0-1.976,0.197-2.889,0.579-0.533,0.214-1.044,0.492-1.524,0.83-1.994,1.408-3.179,3.698-3.175,6.139l.088,59.964c0.006,4.138 3.362,7.489 7.5,7.489 4.154-0.006 7.506-3.369 7.5-7.511l-.077-52.488 380.012,.022-.023,379.991c-49.532,0.008-330.375,0.009-380.021,0.009l.109-297.521c0.001-4.142-3.355-7.501-7.497-7.503-4.144,0-7.501,3.356-7.503,7.497l-.112,304.936c0,0.959 0.183,1.907 0.539,2.793 1.09,2.825 3.83,4.797 6.998,4.797l333.25-.005c62.602-0.003 62.602-0.003 63.476-0.211 3.378-0.804 5.763-3.823 5.763-7.295l.024-394.9c0-0.959-0.184-1.907-0.54-2.793-1.092-2.824-3.831-4.795-6.998-4.795z"></path>{" "}
                            <path d="m304.931,386.983h19c12.407,0 22.5-10.093 22.5-22.5v-12h12c12.407,0 22.5-10.093 22.5-22.5v-19c0-12.407-10.093-22.5-22.5-22.5h-12v-12c0-12.407-10.093-22.5-22.5-22.5h-19c-12.407,0-22.5,10.093-22.5,22.5v12h-12c-12.407,0-22.5,10.093-22.5,22.5v19c0,12.407 10.093,22.5 22.5,22.5h12v12c0,12.407 10.093,22.5 22.5,22.5zm-34.5-49.5c-4.136,0-7.5-3.364-7.5-7.5v-19c0-4.136 3.364-7.5 7.5-7.5h19.5c4.142,0 7.5-3.358 7.5-7.5v-19.5c0-4.136 3.364-7.5 7.5-7.5h19c4.136,0 7.5,3.364 7.5,7.5v19.5c0,4.142 3.358,7.5 7.5,7.5h19.5c4.136,0 7.5,3.364 7.5,7.5v19c0,4.136-3.364,7.5-7.5,7.5h-19.5c-4.142,0-7.5,3.358-7.5,7.5v19.5c0,4.136-3.364,7.5-7.5,7.5h-19c-4.136,0-7.5-3.364-7.5-7.5v-19.5c0-4.142-3.358-7.5-7.5-7.5h-19.5z"></path>{" "}
                            <path d="m149.504,386.983c36.668,0 66.5-29.832 66.5-66.5s-29.832-66.5-66.5-66.5-66.5,29.832-66.5,66.5 29.832,66.5 66.5,66.5zm0-118c28.397,0 51.5,23.103 51.5,51.5s-23.103,51.5-51.5,51.5-51.5-23.103-51.5-51.5 23.103-51.5 51.5-51.5z"></path>{" "}
                            <path d="m380.487,168.773l-38.794-67.194c-6.92-11.986-16.602-18.587-27.262-18.587-10.66,0-20.341,6.601-27.262,18.587l-38.794,67.194c-6.92,11.986-7.796,23.671-2.466,32.903s15.888,14.316 29.728,14.316h77.589c13.84,0 24.398-5.084 29.728-14.316s4.453-20.916-2.467-32.903zm-10.525,25.404c-2.5,4.332-8.601,6.816-16.737,6.816h-77.589c-8.136,0-14.237-2.484-16.737-6.816-2.501-4.332-1.602-10.857 2.466-17.903l38.794-67.194c4.068-7.046 9.27-11.087 14.271-11.087 5.002,0 10.204,4.041 14.271,11.087l38.794,67.194c4.069,7.046 4.968,13.571 2.467,17.903z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </i>
                    {productSelected!.shape}
                    <i className="mx-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.6882 4.14229L14.6516 5.10571C14.9445 5.3986 14.9445 5.87348 14.6516 6.16637C14.3588 6.45926 13.8839 6.45926 13.591 6.16637L12.6269 5.20228L11.5662 6.26294L13.2374 7.93414C13.5303 8.22703 13.5303 8.7019 13.2374 8.9948C12.9445 9.28769 12.4697 9.28769 12.1768 8.9948L10.5056 7.3236L9.44492 8.38426L10.409 9.34835C10.7019 9.64124 10.7019 10.1161 10.409 10.409C10.1161 10.7019 9.64124 10.7019 9.34835 10.409L8.38426 9.44492L7.3236 10.5056L8.9948 12.1768C9.28769 12.4697 9.28769 12.9445 8.9948 13.2374C8.7019 13.5303 8.22703 13.5303 7.93414 13.2374L6.26294 11.5662L5.20228 12.6269L6.16637 13.591C6.45926 13.8839 6.45926 14.3588 6.16637 14.6516C5.87348 14.9445 5.3986 14.9445 5.10571 14.6516L4.14229 13.6882C3.67802 14.1568 3.34308 14.5094 3.10761 14.818C2.81761 15.1981 2.75 15.422 2.75 15.6157C2.75 15.8094 2.81762 16.0334 3.10761 16.4135C3.41081 16.8109 3.87892 17.2812 4.5757 17.978L6.022 19.4243C6.71878 20.1211 7.18914 20.5892 7.58653 20.8924C7.96662 21.1824 8.19057 21.25 8.38426 21.25C8.57795 21.25 8.8019 21.1824 9.18198 20.8924C9.57938 20.5892 10.0497 20.1211 10.7465 19.4243L19.4243 10.7465C20.1211 10.0497 20.5892 9.57938 20.8924 9.18198C21.1824 8.8019 21.25 8.57795 21.25 8.38426C21.25 8.19057 21.1824 7.96662 20.8924 7.58653C20.5892 7.18914 20.1211 6.71878 19.4243 6.022L17.978 4.5757C17.2812 3.87892 16.8109 3.41081 16.4135 3.10761C16.0334 2.81762 15.8094 2.75 15.6157 2.75C15.422 2.75 15.1981 2.81761 14.818 3.10761C14.5094 3.34308 14.1568 3.67802 13.6882 4.14229ZM13.9081 1.91508C14.4217 1.52328 14.9622 1.25 15.6157 1.25C16.2693 1.25 16.8098 1.52328 17.3233 1.91508C17.8104 2.28666 18.3514 2.82777 19.0017 3.47812L20.5219 4.99824C21.1722 5.64856 21.7133 6.18964 22.0849 6.67666C22.4767 7.19017 22.75 7.73073 22.75 8.38426C22.75 9.03779 22.4767 9.57834 22.0849 10.0919C21.7133 10.5789 21.1722 11.12 20.5219 11.7703L11.7703 20.5219C11.12 21.1722 10.5789 21.7133 10.0919 22.0849C9.57834 22.4767 9.03779 22.75 8.38426 22.75C7.73073 22.75 7.19017 22.4767 6.67666 22.0849C6.18964 21.7133 5.64856 21.1722 4.99824 20.5219L3.47812 19.0017C2.82777 18.3514 2.28666 17.8104 1.91508 17.3233C1.52328 16.8098 1.25 16.2693 1.25 15.6157C1.25 14.9622 1.52328 14.4217 1.91508 13.9081C2.28667 13.4211 2.82779 12.88 3.47816 12.2297L12.2297 3.47815C12.88 2.82778 13.4211 2.28666 13.9081 1.91508Z"
                            fill="#9F587B"
                          ></path>{" "}
                        </g>
                      </svg>
                    </i>
                    {productSelected!.tam}
                    <i className="mx-3">
                      <svg
                        fill="#9B5176"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M344.144,151.961c-17.568,0-34.477,2.86-50.298,8.127c-13.873-21.093-32.678-38.76-54.624-51.247 c-23.907-13.603-51.165-20.793-78.827-20.793c-88.011,0-159.613,71.603-159.613,159.613c0,88.011,71.602,159.614,159.613,159.614 c17.566,0,34.477-2.86,50.298-8.127c13.874,21.093,32.678,38.76,54.624,51.247c23.907,13.603,51.165,20.793,78.827,20.793 c88.011,0,159.613-71.602,159.613-159.613C503.758,223.564,432.156,151.961,344.144,151.961z M160.395,391.633 c-79.386,0-143.971-64.585-143.971-143.972c0-79.386,64.585-143.971,143.971-143.971c47.793,0,91.57,23.135,118.512,62.222 c-5.026,2.26-9.914,4.773-14.649,7.523c-23.982-33.588-62.274-53.429-103.863-53.429c-70.39,0-127.657,57.267-127.657,127.657 s57.267,127.657,127.657,127.657s127.657-57.267,127.657-127.657c0-10.406-1.265-20.729-3.74-30.743 c4.706-2.985,9.649-5.627,14.792-7.895c3.482,12.525,5.263,25.486,5.263,38.637C304.367,327.048,239.781,391.633,160.395,391.633z M190.666,355.518c-9.633,2.707-19.786,4.16-30.272,4.16c-61.765,0-112.015-50.25-112.015-112.015s50.25-112.015,112.015-112.015 c36.252,0,69.658,17.178,90.73,46.3c-40.3,29-66.594,76.299-66.594,129.629C184.531,326.539,186.597,341.285,190.666,355.518z M232.129,311.574c0-33.613,14.885-63.811,38.404-84.36c1.238,6.716,1.877,13.559,1.877,20.448 c0,33.612-14.885,63.811-38.404,84.36C232.768,325.306,232.129,318.463,232.129,311.574z M313.877,203.717 c9.631-2.706,19.782-4.158,30.267-4.158c61.765,0,112.015,50.25,112.015,112.015S405.91,423.59,344.144,423.59 c-36.251,0-69.658-17.178-90.73-46.3c40.3-29,66.594-76.299,66.594-129.629C320.008,232.7,317.946,217.949,313.877,203.717z M344.144,455.545c-47.793,0-91.57-23.135-118.513-62.222c5.026-2.26,9.914-4.773,14.649-7.523 c23.982,33.587,62.275,53.43,103.864,53.43c70.39,0,127.657-57.267,127.657-127.657s-57.267-127.657-127.657-127.657 s-127.658,57.267-127.658,127.657c0,10.407,1.266,20.729,3.74,30.742c-4.71,2.987-9.657,5.631-14.806,7.901 c-3.482-12.526-5.249-25.488-5.249-38.643c0-79.386,64.586-143.972,143.972-143.972s143.971,64.586,143.971,143.972 C488.116,390.961,423.53,455.545,344.144,455.545z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M401.692,85.877l-24.532-37.91h-66.03l-24.521,37.888l32.503,41.363h-15.405v15.642H384v-15.642h-15.084L401.692,85.877z M339.005,127.218l-24.582-31.283h21.61V80.293H308.84l10.798-16.684h49.012l10.798,16.684h-27.774v15.642h22.084l-24.802,31.283 H339.005z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <polygon points="455.951,127.218 455.951,112.619 440.31,112.619 440.31,127.218 423.625,127.218 423.625,142.859 440.31,142.859 440.31,159.544 455.951,159.544 455.951,142.859 471.593,142.859 471.593,127.218 "></polygon>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="40.929"
                                y="32.326"
                                width="15.642"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="63.87"
                                y="32.326"
                                width="25.026"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="8.603"
                                y="32.326"
                                width="23.984"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="40.929"
                                y="55.267"
                                width="15.642"
                                height="25.026"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="40.929"
                                width="15.642"
                                height="23.984"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="80.554"
                                y="64.652"
                                width="15.642"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="471.593"
                                y="80.293"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="423.625"
                                y="56.31"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <polygon points="135.821,216.896 135.821,200.212 120.179,200.212 120.179,216.896 104.538,216.896 104.538,232.538 120.179,232.538 120.179,247.136 135.821,247.136 135.821,232.538 152.505,232.538 152.505,216.896 "></polygon>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="88.896"
                                y="263.821"
                                width="15.642"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="135.821"
                                y="287.805"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <polygon points="368.358,279.462 368.358,262.778 352.717,262.778 352.717,279.462 336.033,279.462 336.033,295.104 352.717,295.104 352.717,311.788 368.358,311.788 368.358,295.104 384,295.104 384,279.462 "></polygon>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="391.299"
                                y="247.136"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="368.358"
                                y="327.43"
                                width="15.642"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="495.576"
                                y="200.212"
                                width="15.642"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="121.222"
                                y="7.299"
                                width="14.599"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="135.821"
                                y="464.033"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="104.538"
                                y="464.033"
                                width="23.984"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="160.847"
                                y="464.033"
                                width="22.941"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="135.821"
                                y="431.707"
                                width="15.642"
                                height="22.941"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="135.821"
                                y="486.974"
                                width="15.642"
                                height="25.026"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="96.195"
                                y="431.707"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <rect
                                x="56.57"
                                y="486.974"
                                width="16.684"
                                height="15.642"
                              ></rect>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </i>
                    {productSelected!.material}
                  </li>

                  <li className="flex items-center text-left text-sm font-medium text-gray-600">
                    <i className="mr-3">
                      <svg
                        fill="#9D567A"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 511.999 511.999"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M439.551,68.465c0.708-7.046-3.06-13.559-9.135-16.595L330.246,1.786c-11.211-5.599-24.161,2.682-24.161,14.932v50.085 H189.221c-0.19,0-0.375,0.022-0.563,0.028c-46.263,0.396-82.766,37.773-82.911,83.179l-0.514,16.962H55.661 c-9.206,0-16.695,7.537-16.695,16.695V311.66H22.271c-9.22,0-16.695,7.475-16.695,16.695s7.475,16.695,16.695,16.695 c11.143,0,273.899,0,283.814,0v150.254c0,9.22,7.475,16.695,16.695,16.695h66.78c9.22,0,16.695-7.475,16.695-16.695V345.05h50.085 c0.003,0,0.006,0,0.009,0c30.564-0.01,50.071-36.191,50.073-61.102l0.003-133.672C506.424,109.932,477.653,76.186,439.551,68.465z M339.474,43.731l46.144,23.071l-46.144,23.072V43.731z M207.343,200.362l-51.512,40.064l-51.513-40.064H207.343z M239.305,311.661H72.355v-93.86l73.225,56.953c6.029,4.69,14.471,4.689,20.499,0l73.225-56.953V311.661z M239.305,166.972 H138.637c0.013-0.415,0.499-16.279,0.499-16.695c0-27.355,22.131-50.114,50.07-50.085c0.004,0,0.01,0,0.014,0h0.292 c29.8,0.203,49.793,25.975,49.793,53.657V166.972z M372.864,478.611h-33.39V345.051h33.39V478.611z M473.03,283.947 c-0.001,11.964-10.502,27.715-16.695,27.715H272.695c0-2.706,0-156.026,0-157.812c0-19.982-6.606-38.727-17.721-53.657h51.111 c0,12.778,0,102.482,0,116.864c0,9.22,7.475,16.695,16.695,16.695s16.695-7.475,16.695-16.695v-89.852l54.025-27.012h29.45 c27.617,0,50.085,22.468,50.085,50.085L473.03,283.947z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </i>
                    Nota: Todo envío se realiza mediante Correos de Costa Rica
                  </li>
                </ul>

                {/* <div className="mt-5 flex items-center">
          <div className="flex items-center">
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
        </div>

        <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          <label className="">
            <input type="radio" name="type" value="Powder" className="peer sr-only" checked />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
          </label>
          <label className="">
            <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
          </label>
          <label className="">
            <input type="radio" name="type" value="Groud" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Groud</p>
          </label>
        </div> */}

                {/* <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          <label className="">
            <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
            <span className="mt-1 block text-center text-xs">$80/mo</span>
          </label>
          <label className="">
            <input type="radio" name="subscription" value="8 Months" className="peer sr-only" checked />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
            <span className="mt-1 block text-center text-xs">$60/mo</span>
          </label>
          <label className="">
            <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
            <span className="mt-1 block text-center text-xs">$40/mo</span>
          </label>
        </div> */}

                <div className="mt-10 flex flex-col items-center space-y-4 border-t-2 border-y-[#9d567a] border-b-2 py-4 sm:flex-row sm:space-y-0">
                  <div className="flex items-end">
                    <h1 className="text-base">Ordenar :</h1>
                  </div>
                  <div className="inline-flex ml-3">
                    <div className="flex items-center">
                      <button
                        className=" btn btn-sm px-4 py-2  z-10  text-white rounded-l-md"
                        style={{ backgroundColor: "#9d567a" }}
                        onClick={() => {
                          Decrement();
                        }}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="input-sm px-4 py-2 -ml-1  bg-gray-100 text-center w-16"
                        value={counter}
                        readOnly
                      ></input>
                      <button
                        className=" btn btn-sm px-4 -ml-1 py-2 z-10 text-white  rounded-r-md"
                        style={{ backgroundColor: "#9d567a" }}
                        onClick={() => {
                          Increment();
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 border-b-[#9d567a] border-b-2 py-4 sm:flex-row sm:space-y-0">
                  <div className="flex items-end">
                    <div className="block">
                    <h1 className="text-xl font-bold">
                      Precio :
                      {new Intl.NumberFormat("es-CR", {
                        style: "currency",
                        currency: "CRC",
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(
                        Number(productSelected!.precio) -
                          Number(productSelected!.precio) *
                            (productSelected!.desc / 100)
                      )}
                    </h1>
                    {
                      productSelected!.desc === 0 ? (<></>):(<p className="text-lg line-through ">
                      Antes :
                      {new Intl.NumberFormat("es-CR", {
                        style: "currency",
                        currency: "CRC",
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(
                        Number(productSelected!.precio)
                      )}
                    </p>)
                    }
                    
                    </div>
                    
                  </div>
                  <div
                    
                  >
                    <label
                      htmlFor="my_modal_90"
                      className="btn inline-flex items-center sm:ml-10 justify-center rounded-md border-2 border-transparent bg-[#9d567a] bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#9d567a]  hover:bg-opacity-80"
                      onClick={() => {
                        dispatch(alert_type({ type: "add" }));
                        order(productSelected!,counter), setCounter(0)
                      }}                   
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 mr-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Añadir
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-3 lg:col-span-4">
                <div className="border-b border-gray-300">
                  <nav className="flex gap-4">
                    <a
                      title=""
                      className="border-b-2 border-gray-900 py-4 text-lg font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                    >
                      Descripcción
                    </a>

                    {/* <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </a> */}
                  </nav>
                </div>

                <div className=" flow-root mt-7">
                  <p className="mt-4 text-base text-justify">
                    {productSelected!.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
      
      <Alert typeAlert={alert}></Alert>
      
      
    </>
  );
};
