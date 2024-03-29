import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import "./store_styles.css";
import { getAll } from "../../controllers/products_gre_sto";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getFilters,
  getProductsFilters,
} from "../../controllers/filters_gre_sto";
import { Filter } from "../../interfaces/filters_interface_gre_sto";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
// const subCategories = [
//   { name: "1", href: "#" },
//   { name: "2", href: "#" },
//   { name: "3", href: "#" },
//   { name: "4", href: "#" },
//   { name: "5", href: "#" },
// ];
// const filters = [
//   {
//     id: "Genero",
//     name: "Genero",
//     options: [
//       { value: "Hombre", label: "Hombre", checked: false },
//       { value: "Mujer", label: "Mujer", checked: false },
//     ],
//   },
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "blanco", label: "White", checked: false },
//       { value: "beige", label: "Beige", checked: false },
//       { value: "azul", label: "Blue", checked: true },
//       { value: "cafe", label: "Brown", checked: false },
//       { value: "verde", label: "Green", checked: false },
//       { value: "morado", label: "Purple", checked: false },
//     ],
//   },
//   {
//     id: "categoria",
//     name: "Categoria",
//     options: [
//       { value: "Aretes", label: "New Arrivals", checked: false },
//       { value: "Anillos", label: "Sale", checked: false },
//       { value: "Collares", label: "Travel", checked: true },
//       { value: "Pulseras", label: "Organization", checked: false },
//       { value: "Sets", label: "Accessories", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "Tamano",
//     options: [
//       { value: "2l", label: "2L", checked: false },
//       { value: "6l", label: "6L", checked: false },
//       { value: "12l", label: "12L", checked: false },
//       { value: "18l", label: "18L", checked: false },
//       { value: "20l", label: "20L", checked: false },
//       { value: "40l", label: "40L", checked: true },
//     ],
//   },
// ];
// const productsStoreFilters = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 4,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 5,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 6,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 7,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 8,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 9,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 10,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 11,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 12,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   }
//   // More products...
// ];
function classNames(...classNamees: string[]) {
  return classNamees.filter(Boolean).join(" ");
}

export const Filters = () => {
  const dispatch = useAppDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  // const productsStoreFilters = useAppSelector((state) => state.products.data);
  const filters = useAppSelector((state) => state.filters.filters);
  const [selectionFilters, setSelectionFilter] = useState<Filter[]>([]);

  // const handleModalProduct = () => {
  //   console.log("Dale");
  //   const element = document.querySelector("#my_modal_10") as HTMLInputElement;
  //   element.checked = true;
  // };
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectionFilter((prevFilter) => {
      if (checked) {
        return [...prevFilter, { value, checked }];
      } else {
        return prevFilter.filter((filter) => filter.value !== value);
      }
    });
  };
  const isChecked = (value: string) => {
    let checked = false;

    selectionFilters.find((element) => {
      if (element.value === value) {
        checked = true;
      }
    });
    return checked;
  };

  useEffect(() => {
    // Este efecto se ejecuta después de cada actualización del estado
    alert("Frutas seleccionadas: " + JSON.stringify(selectionFilters));
    getProductsFilters(filters, selectionFilters, dispatch);
  }, [selectionFilters]); // Se activa solo cuando el estado frutasSeleccionadas cambia

  useEffect(() => {
    getAll(dispatch);
    getFilters(dispatch);
  }, []);

  return (
    <div className="bg-white">
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
                <Dialog.Panel
                  className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
                  style={{
                    color: "#C2A78D",
                    backgroundColor: "rgb(246, 218, 239)",
                  }}
                >
                  <div
                    className="flex items-center justify-between px-4"
                    style={{
                      color: "#C2A78D",
                      backgroundColor: "rgb(246, 218, 239)",
                    }}
                  >
                    <h2
                      className="text-lg font-medium text-gray-900"
                      style={{
                        color: "#C2A78D",
                        backgroundColor: "rgb(246, 218, 239)",
                      }}
                    >
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                        style={{
                          color: "#C2A78D",
                          backgroundColor: "rgb(246, 218, 239)",
                        }}
                      />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                        style={{
                          color: "#C2A78D",
                          backgroundColor: "rgb(246, 218, 239)",
                        }}
                      >
                        {({ open }) => (
                          <>
                            <h3
                              className="-mx-2 -my-3 flow-root"
                              style={{
                                color: "#C2A78D",
                                backgroundColor: "rgb(246, 218, 239)",
                              }}
                            >
                              <Disclosure.Button
                                className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                style={{
                                  color: "#C2A78D",
                                  backgroundColor: "rgb(246, 218, 239)",
                                }}
                              >
                                <span
                                  className="font-medium "
                                  style={{
                                    color: "#C2A78D",
                                    backgroundColor: "rgb(246, 218, 239)",
                                  }}
                                >
                                  {section.name}
                                </span>
                                <span
                                  className="ml-6 flex items-center"
                                  style={{
                                    color: "#C2A78D",
                                    backgroundColor: "rgb(246, 218, 239)",
                                  }}
                                >
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
                            <Disclosure.Panel className="pt-6">
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
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      value={option.value}
                                      onChange={(e) => {
                                        handleCheckbox(e);
                                      }}
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 "
                                      style={{
                                        color: "#C2A78D",
                                        backgroundColor: "rgb(246, 218, 239)",
                                      }}
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
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-baseline justify-end border-b  pb-6 pt-10"
            style={{ borderColor: "#C2A78D" }}
          >
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className="group inline-flex justify-center text-sm font-medium "
                    style={{ color: "#C2A78D" }}
                  >
                    Ordenar
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                      style={{ color: "#C2A78D" }}
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon
                  className="h-5 w-5"
                  aria-hidden="true"
                  style={{ color: "#C2A78D" }}
                />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  style={{ color: "#C2A78D" }}
                />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b py-6"
                    style={{
                      color: "#C2A78D",
                      backgroundColor: "rgb(246, 218, 239)",
                    }}
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button
                            className="flex w-full  p-3 items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                            style={{
                              color: "#C2A78D",
                              backgroundColor: "rgb(246, 218, 239)",
                            }}
                          >
                            <span
                              className="font-medium "
                              style={{
                                color: "#C2A78D",
                                backgroundColor: "rgb(246, 218, 239)",
                              }}
                            >
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  style={{ color: "#95806b" }}
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  style={{ color: "#95806b" }}
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  value={option.value}
                                  type="checkbox"
                                  checked={isChecked(option.value)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={(e) => {
                                    handleCheckbox(e);
                                  }}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm"
                                  style={{ color: "#C2A78D" }}
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
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl ">
                    <div className="mt-6  grid grid-cols-1 justify-items-center gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-1 md:grid-cols-3 md:gap-x-32  lg:grid-cols-3  lg:gap-x-24  xl:gap-x-4 xl:grid-cols-3" >
{/*                     
                        // <div key={product.id} className="group relative">
                        //   <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72">
                        //     <img
                        //       src={product.imageSrc}
                        //       alt={product.imageAlt}
                        //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        //     />
                        //   </div>

                        //   <div
                        //     className="mt-4 flex justify-between font-medium "
                        //     style={{ color: "#95806b" }}
                        //   >
                        //     <div>
                        //       <h3 className="text-sm ">
                        //         <a
                        //           onClick={() => {
                        //             handleModalProduct();
                        //           }}
                        //         >
                        //           <span
                        //             aria-hidden="true"
                        //             className="absolute inset-0"
                        //           />
                        //           {product.name}
                        //         </a>
                        //       </h3>

                        //       <p className="text-sm font-bold ">
                        //       {product.price}
                        //     </p>
                        //     </div>

                        //     <button className="btn btn-circle btn-ghost">
                        //       <ShoppingBagIcon
                        //         className="h-6 w-6 flex-shrink-0 text-gray-300 group-hover:text-gray-600"
                        //         aria-hidden="true"
                        //         style={{ color: "#9b5176" }}
                        //       />
                        //     </button>
                        //     <button className="btn btn-circle btn-ghost">
                        //       <svg
                        //         xmlns="http://www.w3.org/2000/svg"
                        //         className="h-7 w-7"
                        //         fill="white"
                        //         viewBox="0 0 24 24"
                        //         stroke="#9b5176"
                        //       >
                        //         <path
                        //           strokeLinecap="round"
                        //           strokeLinejoin="round"
                        //           strokeWidth="2"
                        //           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        //         />
                        //       </svg>
                        //     </button>
                        //   </div>
                        // </div> */}
                        <div className="w-72 sm:w-64 md:w-56 lg:w-60 xl:w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                          <a href="#">
                            <img
                              src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg"
                              alt="Product"
                              className="h-72 w-72 sm:h-72 sm:w-64  md:h-64 md:w-60 lg:h-72 lg:w-64 xl:w-64 xl:h-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-20 sm:w-60 md:40 lg:w-48 xl:w-60">
                              <p className="text-lg font-bold text-black truncate block capitalize">
                                Product Name
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="inline-flex">
                                <p className="text-lg font-semibold text-black cursor-auto my-2">
                                  $149
                                </p>
                                <p className="oper text-sm mt-revert text-black cursor-auto">
                                  $149
                                </p>
                                
                                 
                                </div>
                                
                                
                                <div className="inline-flex mr-5">
                                  <aside>
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 512 512"
                                      baseProfile="tiny"
                                      overflow="visible"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="Layer_1" />

                                      <g id="Layer_2" />

                                      <g id="Layer_3" />

                                      <g id="Layer_4" />

                                      <g id="Layer_5" />

                                      <g id="Layer_6" />

                                      <g id="Layer_7" />

                                      <g id="Layer_8" />

                                      <g id="Layer_9" />

                                      <g id="Layer_10" />

                                      <g id="Layer_11" />

                                      <g id="Layer_12" />

                                      <g id="Layer_13" />

                                      <g id="Layer_14" />

                                      <g id="Layer_15" />

                                      <g id="Layer_16" />

                                      <g id="Layer_17" />

                                      <g id="Layer_18" />

                                      <g id="Layer_19" />

                                      <g id="Layer_20" />

                                      <g id="Layer_21" />

                                      <g id="Layer_22" />

                                      <g id="Layer_23" />

                                      <g id="Layer_24" />

                                      <g id="Layer_25" />

                                      <g id="Layer_26" />

                                      <g id="Layer_27" />

                                      <g id="Layer_28" />

                                      <g id="Layer_29" />

                                      <g id="Layer_30" />

                                      <g id="Layer_31" />

                                      <g id="Layer_32" />

                                      <g id="Layer_33" />

                                      <g id="Layer_34" />

                                      <g id="Layer_35" />

                                      <g id="Layer_36" />

                                      <g id="Layer_37" />

                                      <g id="Layer_38" />

                                      <g id="Layer_39" />

                                      <g id="Layer_40" />

                                      <g id="Layer_41" />

                                      <g id="Layer_42" />

                                      <g id="Layer_43" />

                                      <g id="Layer_44" />

                                      <g id="Layer_45" />

                                      <g id="Layer_46" />

                                      <g id="Layer_47" />

                                      <g id="Layer_48" />

                                      <g id="Layer_49" />

                                      <g id="Layer_50">
                                        <g>
                                          <path
                                            d="M397.191,504.5H114.809c-25.778,0-46.121-21.871-44.217-47.536L97.54,93.849    c0.191-2.572,2.333-4.561,4.912-4.561h307.095c2.579,0,4.721,1.989,4.912,4.561l26.948,363.115    C443.312,482.629,422.969,504.5,397.191,504.5z"
                                            fill="#FFC4BF"
                                          />

                                          <path
                                            d="M441.408,456.964L414.459,93.849c-0.191-2.572-2.333-4.561-4.912-4.561h-19.414    c2.579,0,4.721,1.989,4.912,4.561l26.948,363.115c1.905,25.665-18.439,47.536-44.217,47.536h19.414    C422.969,504.5,443.312,482.629,441.408,456.964z"
                                            fill="#FFAAA1"
                                          />

                                          <g>
                                            <ellipse
                                              cx="189.584"
                                              cy="161.851"
                                              fill="#FD7A6E"
                                              rx="15.407"
                                              ry="15.382"
                                            />

                                            <ellipse
                                              cx="322.415"
                                              cy="161.851"
                                              fill="#FD7A6E"
                                              rx="15.407"
                                              ry="15.382"
                                            />

                                            <path
                                              d="M322.415,146.469c-1.698,0-3.326,0.285-4.854,0.791c6.129,2.031,10.554,7.791,10.554,14.591     s-4.425,12.56-10.554,14.591c1.527,0.506,3.156,0.791,4.854,0.791c8.509,0,15.407-6.887,15.407-15.382     C337.823,153.356,330.925,146.469,322.415,146.469z"
                                              fill="#FB695B"
                                            />
                                          </g>

                                          <path
                                            d="M189.585,146.469c-1.698,0-3.326,0.285-4.854,0.791c6.129,2.031,10.554,7.791,10.554,14.591    s-4.425,12.56-10.554,14.591c1.527,0.506,3.156,0.791,4.854,0.791c8.509,0,15.407-6.887,15.407-15.382    C204.992,153.356,198.094,146.469,189.585,146.469z"
                                            fill="#FB695B"
                                          />

                                          <path
                                            d="M70.592,456.964c-1.905,25.665,18.439,47.536,44.217,47.536h282.382c25.778,0,46.121-21.871,44.217-47.536    l-2.776-37.405H73.368L70.592,456.964z"
                                            fill="#FD7A6E"
                                          />

                                          <path
                                            d="M441.408,456.964l-2.776-37.405h-19.414l2.776,37.405c1.905,25.665-18.439,47.536-44.217,47.536h19.414    C422.969,504.5,443.312,482.629,441.408,456.964z"
                                            fill="#FB695B"
                                          />

                                          <g>
                                            <g>
                                              <path
                                                d="M257.687,249.342c-0.48,0-0.966-0.047-1.455-0.145c-4.001-0.799-6.597-4.691-5.798-8.693      c1.094-5.476,1.043-11.251-0.147-16.7c-1.236-5.655-3.726-11.098-7.2-15.74c-2.445-3.267-1.779-7.897,1.488-10.342      c3.267-2.445,7.897-1.779,10.342,1.488c4.732,6.322,8.122,13.736,9.807,21.441c1.621,7.424,1.691,15.29,0.201,22.749      C264.224,246.912,261.138,249.342,257.687,249.342z"
                                                fill="#A05423"
                                              />
                                            </g>

                                            <ellipse
                                              cx="224.46"
                                              cy="302.19"
                                              fill="#FFA83F"
                                              rx="41.604"
                                              ry="60.239"
                                            />

                                            <path
                                              d="M224.459,241.952c-1.643,0-3.26,0.153-4.854,0.421c20.689,3.483,36.751,28.927,36.751,59.818     c0,30.89-16.062,56.335-36.751,59.818c1.593,0.268,3.21,0.421,4.854,0.421c22.977,0,41.604-26.97,41.604-60.239     C266.064,268.921,247.437,241.952,224.459,241.952z"
                                              fill="#FF9C20"
                                            />

                                            <ellipse
                                              cx="287.54"
                                              cy="302.19"
                                              fill="#FFA83F"
                                              rx="41.604"
                                              ry="60.239"
                                            />

                                            <ellipse
                                              cx="257.68"
                                              cy="302.19"
                                              fill="#FF9000"
                                              rx="36.199"
                                              ry="60.239"
                                            />

                                            <path
                                              d="M287.54,241.952c-1.643,0-3.26,0.153-4.854,0.421c20.689,3.483,36.751,28.927,36.751,59.818     c0,30.89-16.062,56.335-36.751,59.818c1.593,0.268,3.21,0.421,4.854,0.421c22.977,0,41.604-26.97,41.604-60.239     C329.145,268.921,310.518,241.952,287.54,241.952z"
                                              fill="#FF9C20"
                                            />

                                            <path
                                              d="M257.68,241.952c-1.647,0-3.265,0.2-4.854,0.555c17.695,3.949,31.345,29.156,31.345,59.684     s-13.65,55.736-31.345,59.684c1.589,0.354,3.206,0.555,4.854,0.555c19.992,0,36.199-26.97,36.199-60.239     C293.879,268.921,277.672,241.952,257.68,241.952z"
                                              fill="#F88000"
                                            />
                                          </g>
                                        </g>

                                        <g>
                                          <g>
                                            <path d="M399.316,512H112.673c-14.565,0-28.6-6.117-38.503-16.783c-9.883-10.644-14.935-25.05-13.861-39.526L87.665,87.097     c0.481-6.49,5.957-11.575,12.466-11.575h311.729c6.51,0,11.985,5.085,12.466,11.576l27.354,368.593     c1.074,14.476-3.978,28.882-13.86,39.526C427.915,505.883,413.881,512,399.316,512z M102.452,90.522L75.269,456.801     c-0.778,10.482,2.736,20.5,9.894,28.209c7.179,7.732,16.949,11.99,27.511,11.99h286.643c10.562,0,20.331-4.258,27.511-11.989     c7.158-7.709,10.672-17.728,9.894-28.209L409.538,90.522H102.452z" />
                                          </g>

                                          <g>
                                            <path d="M322.359,148.605c-4.143,0-7.5-3.358-7.5-7.5V74.287c0-32.691-26.641-59.287-59.386-59.287     c-32.751,0-59.396,26.596-59.396,59.287v66.777c0,4.142-3.358,7.5-7.5,7.5s-7.5-3.358-7.5-7.5V74.287     C181.077,33.325,214.451,0,255.473,0c41.017,0,74.386,33.325,74.386,74.287v66.818     C329.859,145.248,326.501,148.605,322.359,148.605z" />
                                          </g>

                                          <g>
                                            <g>
                                              <path d="M188.577,179.794c-12.759,0-23.14-10.369-23.14-23.114s10.381-23.114,23.14-23.114s23.14,10.369,23.14,23.114      S201.336,179.794,188.577,179.794z M188.577,148.566c-4.488,0-8.14,3.64-8.14,8.114s3.652,8.114,8.14,8.114      s8.14-3.64,8.14-8.114S193.065,148.566,188.577,148.566z" />
                                            </g>

                                            <g>
                                              <path d="M323.413,179.794c-12.759,0-23.14-10.369-23.14-23.114s10.381-23.114,23.14-23.114s23.14,10.369,23.14,23.114      S336.171,179.794,323.413,179.794z M323.413,148.566c-4.488,0-8.14,3.64-8.14,8.114s3.651,8.114,8.14,8.114      s8.14-3.64,8.14-8.114S327.901,148.566,323.413,148.566z" />
                                            </g>
                                          </g>

                                          <g>
                                            <path d="M399.316,512H112.673c-14.565,0-28.599-6.117-38.502-16.783c-9.883-10.644-14.936-25.05-13.861-39.526l0,0l2.818-37.969     c0.291-3.916,3.553-6.945,7.479-6.945h370.775c3.927,0,7.188,3.029,7.479,6.945l2.817,37.969     c1.074,14.476-3.978,28.882-13.86,39.526C427.915,505.883,413.881,512,399.316,512z M75.269,456.801     c-0.778,10.482,2.736,20.5,9.895,28.209c7.179,7.731,16.949,11.989,27.51,11.989h286.643c10.562,0,20.331-4.258,27.511-11.989     c7.158-7.709,10.672-17.728,9.894-28.209l-2.302-31.024H77.571L75.269,456.801z" />
                                          </g>

                                          <g>
                                            <g>
                                              <path d="M223.975,367.79c-13.816,0-26.612-7.511-36.031-21.149c-8.834-12.792-13.699-29.661-13.699-47.501      s4.865-34.709,13.699-47.501c9.419-13.638,22.215-21.149,36.031-21.149c7.725,0,15.424,2.472,22.263,7.149      c3.419,2.338,4.295,7.005,1.958,10.424s-7.004,4.296-10.424,1.958c-4.396-3.006-9.039-4.531-13.796-4.531      c-18.826,0-34.73,24.569-34.73,53.65s15.904,53.65,34.73,53.65c4.757,0,9.399-1.524,13.797-4.531      c3.419-2.338,8.086-1.461,10.424,1.958c2.338,3.419,1.461,8.086-1.958,10.424C239.397,365.318,231.699,367.79,223.975,367.79z" />
                                            </g>

                                            <g>
                                              <path d="M288.014,367.79c-7.003,0-13.76-1.934-20.083-5.748c-3.548-2.139-4.688-6.749-2.549-10.296      c2.14-3.547,6.749-4.688,10.295-2.549c3.952,2.384,8.104,3.592,12.337,3.592c18.826,0,34.73-24.569,34.73-53.65      s-15.904-53.65-34.73-53.65c-4.234,0-8.385,1.208-12.336,3.592c-3.546,2.141-8.156,1-10.296-2.548      c-2.14-3.547-0.999-8.157,2.548-10.296c6.322-3.814,13.08-5.748,20.084-5.748c13.816,0,26.613,7.511,36.031,21.149      c8.834,12.792,13.699,29.661,13.699,47.501s-4.865,34.709-13.699,47.501C314.627,360.279,301.831,367.79,288.014,367.79z" />
                                            </g>

                                            <g>
                                              <path d="M257.7,367.786c-24.811,0-44.245-30.154-44.245-68.648s19.435-68.648,44.245-68.648s44.245,30.154,44.245,68.648      S282.51,367.786,257.7,367.786z M257.7,245.49c-15.853,0-29.245,24.568-29.245,53.648s13.393,53.648,29.245,53.648      s29.245-24.568,29.245-53.648S273.552,245.49,257.7,245.49z" />
                                            </g>

                                            <g>
                                              <path d="M257.707,245.491c-0.487,0-0.981-0.048-1.477-0.147c-4.062-0.811-6.697-4.762-5.885-8.824      c1.11-5.559,1.059-11.421-0.149-16.952c-1.255-5.74-3.782-11.266-7.309-15.978c-2.482-3.316-1.806-8.017,1.51-10.499      c3.316-2.481,8.016-1.806,10.499,1.51c4.803,6.417,8.245,13.943,9.955,21.764c1.646,7.536,1.717,15.521,0.204,23.092      C264.342,243.025,261.21,245.491,257.707,245.491z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </aside>
                                  <aside>
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 1024 1024"
                                      className="icon"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M895.36 243.904a251.52 251.52 0 0 0-355.776 0l-20.096 20.096-20.096-20.096A251.52 251.52 0 0 0 143.616 599.68S466.24 926.72 512 928c14.336 0.384 86.4-59.52 164.224-128.192l-0.512-0.64a22.016 22.016 0 0 0-11.968-40.896 21.76 21.76 0 0 0-14.784 5.888l-0.064-0.064 62.336-56.832a22.08 22.08 0 0 0-7.808 16.704 22.4 22.4 0 0 0 22.4 22.464c5.44 0 10.24-2.176 14.208-5.44l0.256 0.32 50.048-45.76-0.448-0.448a22.08 22.08 0 0 0-16.768-36.992 21.952 21.952 0 0 0-14.656 5.824l80.384-73.472 0.512 0.512a22.08 22.08 0 0 0-5.696 14.592 22.4 22.4 0 0 0 22.4 22.464 22.016 22.016 0 0 0 14.272-5.504l0.32 0.384 24.832-23.168a251.776 251.776 0 0 0-0.128-355.84z"
                                        fill=""
                                      />
                                      <path
                                        d="M510.976 878.656c-51.008-33.344-207.168-180.416-335.488-310.528a206.976 206.976 0 0 1-0.192-292.544c39.04-39.104 91.008-60.608 146.24-60.608s107.136 21.504 146.176 60.544l51.84 51.84 51.84-51.776c39.04-39.04 90.944-60.544 146.176-60.544s107.2 21.504 146.176 60.544c39.04 39.04 60.544 90.944 60.544 146.24s-21.504 107.136-60.544 146.176c-140.096 131.776-301.76 276.032-352.768 310.656z"
                                        fill="#FF5F5F"
                                      />
                                      <path
                                        d="M308.032 641.984a15.872 15.872 0 0 1-10.112-3.648 757.12 757.12 0 0 1-53.504-48.896 875.968 875.968 0 0 0-25.856-24.64C141.376 495.488 145.344 423.616 145.536 420.544 143.808 318.976 237.376 264.64 241.344 262.4a16 16 0 0 1 15.808 27.84c-0.832 0.448-81.088 47.488-79.744 131.2-0.064 3.648-2.368 61.248 62.528 119.552 8.704 7.808 17.536 16.448 26.816 25.536 15.616 15.36 31.808 31.168 51.328 47.104a15.936 15.936 0 1 1-10.048 28.352zM422.656 751.36a15.872 15.872 0 0 1-11.2-4.544l-61.312-60.032a16 16 0 1 1 22.4-22.912l61.312 60.032a16 16 0 0 1-11.2 27.456z"
                                        fill="#FFFFFF"
                                      />
                                    </svg>
                                  </aside>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
