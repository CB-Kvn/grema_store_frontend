import { Fragment, useEffect, useState } from "react";
import { Dialog,  Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import "./store_styles.css";
import { getAll } from "../../controllers/products_controller_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";
// import {
//   getProductsFilters,
// } from "../../controllers/filters_controller_gre_sto";
// import { Filter } from "../../interfaces/filters_interface_gre_sto";
import { GridProducts } from "./grid_products_gre_sto";
import {
  loginController,
  loginRefreshController,
} from "../../controllers/login_controller_gre_sto";
import { Filtering } from "./filterin_gre_sto";
import { Filter } from "../../interfaces/filters_interface_gre_sto";
import { Pagination } from "./pagination_gre_sto";
import { getProductsFilters } from "../../controllers/filters_controller_gre_sto";
// import { getAllProducts } from "../../services/products_service_gre_sto";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.login);
  const filters = useAppSelector((state) => state.filters.dataFilter);
  const products = useAppSelector((state) => state.products.dataProducts);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const initialFilters: Filter = {
    color: [],
    tam: [],
    forma: [],
    material: [],
    categoria: []
  };
  const [selectionFilters, setSelectionFilter] = useState<Filter>(initialFilters);
 
  const handlerGuestOpen = () => {
    const element = document.querySelector("#my_modal_3") as HTMLInputElement;
    element.checked = true;
  };
  const loginFlow = () => {
    console.log(login);
    if (login.success == false && login.type === "") {
      handlerGuestOpen();
      loginController(dispatch, "", "");
    }
    if (login.success == true && login.type === "guest") {
      handlerGuestOpen();
      loginRefreshController(dispatch, login);
    }
    if (login.success === true && login.type === "inscript") {
      loginRefreshController(dispatch, login);
    }
  };

  useEffect(() => {
    
    getProductsFilters(filters,selectionFilters,dispatch)
  }, [selectionFilters]);



  useEffect(() => {
    if (login.success === true) {
      // getAll(dispatch, login);
      
    }
  }, [login]);

  useEffect(() => {
    loginFlow();
    getAll(dispatch, login);
  }, []);

  return (
    <div className="">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  {/* <form className="mt-4 border-t border-gray-200">
                    <div>
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white">
                                  <span>{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        type="checkbox"
                                        checked={isChecked(option.value)}
                                        className="h-4 w-4 rounded border-gray-3"
                                        value={option.value}
                                        onChange={(e) => {
                                          handleCheckbox(e);
                                        }}
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 "
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  </form> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8">
          {/* <div className="flex  mt-20">
          <button
                type="button"
                className="pb-3 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <h1>Filtrar:</h1>
          </div> */}
        
          <div className="flex flex-col lg:flex-row  justify-center border-b border-t mt-20 mb-6">
            <div className="flex justify-center flex-wrap gap-0 lg:gap-0 lg:flex-nowrap lg:space-x-4  lg:mb-0">
              <Filtering name="Categoria" type="categories" list = {filters.categoria} setSelectionFilter={setSelectionFilter} filters={selectionFilters}  />
              <Filtering name="Color" type="color" list = {filters.color} setSelectionFilter={setSelectionFilter} filters={selectionFilters}  />
              <Filtering name="Forma" type="shapes" list = {filters.forma} setSelectionFilter={setSelectionFilter} filters={selectionFilters}   />
              <Filtering name="Largo" type="size" list = {filters.tam} setSelectionFilter={setSelectionFilter} filters={selectionFilters}  />
              <Filtering name="Material" type="material"  list = {filters.material} setSelectionFilter={setSelectionFilter} filters={selectionFilters}  />
            </div>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div></div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                ></Transition>
              </Menu>

              {/* <button
                type="button"
                className="pb-3 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}

              {/* Uncomment the button below if you need a filter button for mobile view */}
              {/* 
        <button
          type="button"
          className="my-auto text-gray-400 hover:text-gray-500 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button> 
        */}
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Product grid */}
              <div className="lg:col-span-4">
                <div className="">
                  <div className="mx-auto max-w-5xl">
                    <GridProducts products={products}></GridProducts>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex justify-center mt-10">
            <Pagination></Pagination>
            </div>
           
          </section>
        </main>
      </div>
    </div>
  );
};
