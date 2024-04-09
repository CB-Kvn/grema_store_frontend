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
import { GridProducts } from "./grid_products_gre_sto";

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
  const products = useAppSelector((state) => state.products.data);

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
                    <div style={{backgroundImage: "url(/src/assets/Historia frase emprendedores Degradado Rosa.gif)"}}>
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                          style={{
                            color: "#C2A78D",
                            backgroundColor: "transparent",
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
                    </div>
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
              <div > 
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
                </div>
              
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl ">
                    <GridProducts products={products}></GridProducts>
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
