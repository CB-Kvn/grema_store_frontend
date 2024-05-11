import { Fragment, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Filters } from "./filters_gre_store";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { OptionProfile } from "../navigation/option_profile_gre_sto";

import { new_user_form } from "../../redux/reducers_slices/sign_up_gre_sto_slice";
import { Carts } from "./carts_gre_sto";
import { shopCart_visible } from "../../redux/reducers_slices/handler_gre_sto_slice";

import { ModalLoginStore } from "./modal_login_gre_sto";
import { ModalSign } from "./modal_sign_gre_sto";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { DateHour } from "../../utils/date-hour";
import { Alerts } from "../alerts/alerts_guest_gre_sto";
import { Carousel } from "./carousel_cat_gre_sto";
// import { Carousel } from "./carousel_cat_gre_sto";

const navigation = {
  categories: [
    {
      id: "Mujeres",
      name: "Mujeres",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.45 PM.jpeg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "accessories",
          name: "Accesorios",
          items: [
            { name: "Aretes", href: "#" },
            { name: "Anillos", href: "#" },
            { name: "Collares", href: "#" },
            { name: "Pulseras", href: "#" },
            { name: "Sets", href: "#" },
          ],
        },
      ],
    },
    {
      id: "Hombres",
      name: "Hombres",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Aretes", href: "#" },
            { name: "Anillos", href: "#" },
            { name: "Collares", href: "#" },
            { name: "Pulseras", href: "#" },
            { name: "Sets", href: "#" },
          ],
        },
      ],
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const MenuStore = () => {
  const login = useAppSelector((state) => state.login);
  const total = useAppSelector((state) => state.shopcar.suma);
  const modalAlert = useAppSelector((state)=>state.handler.modal_alert.type)

  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  // const [dateHour,setDateHour] = useState<string>('')

  const handlingBannerCommercial = () => {
    setOpen(false);
  };
  const handleSignUp = (open: boolean) => {
    dispatch(new_user_form({ show: open }));
  };
  const handleCartShop = (open: boolean) => {
    dispatch(shopCart_visible({ show: open }));
  };

  // useEffect(() => {
  //   const cl = setInterval(() => {
  //     const date = DateHour()
  //     setDateHour(date)
  //   }, 1000);

  //   return () => clearInterval(cl);
  // }, []);

  return (
    <div className=" mt-8" id="store">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      style={{ color: "#C2A78D" }}
                    />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b ">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          // className={"Tab"}
                          className={({ selected }) =>
                            classNames(selected ? "Tab selected" : "Tab")
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                        style={{ color: "#C2A78D" }}
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                              style={{ color: "#C2A78D" }}
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <LazyLoadImage
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                className="mt-6 block font-medium"
                                style={{ borderBottomColor: "#C2A78D" }}
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  style={{ borderBottomColor: "#C2A78D" }}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium"
                              style={{ borderBottomColor: "#C2A78D" }}
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <button
                                    type="button"
                                    className="-m-2 block p-2"
                                    style={{ borderBottomColor: "#C2A78D" }}
                                    onClick={() => handlingBannerCommercial()}
                                  >
                                    {item.name}
                                  </button>
                                </div>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root" style={{ color: "#C2A78D" }}>
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium "
                      style={{ color: "#C2A78D" }}
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root" style={{ color: "#C2A78D" }}>
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium "
                      style={{ color: "#C2A78D" }}
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-10">
        {/* <p
          className="flex h-10 items-center justify-center mb-5 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F6DAEF", color: "#393939" }}
        >
          <h1>{dateHour} </h1>
        </p> */}

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b pb-4">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6"
                  aria-hidden="true"
                  style={{ color: "#393939" }}
                />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <LazyLoadImage
                    className="w-80 h-28 "
                    src="https://grema-store-frontend.vercel.app/images/logoH.png"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}

              <div className="ml-auto flex items-center">
                

                {/* Cart */}

                <div className="ml-4 flow-root lg:ml-6">
                  <a
                    onClick={() => {
                      handleCartShop(true);
                    }}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-10 w-10 flex-shrink-0 text-gray-300 group-hover:text-gray-600"
                      aria-hidden="true"
                      style={{ color: "#393939" }}
                    />
                    <span
                      className="ml-2 text-base font-medium"
                      style={{ color: "#393939" }}
                    >
                      {total}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

                {login.success && login.email != "" ? (
                  <OptionProfile></OptionProfile>
                ) : (
                  <>
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <>
                    <label htmlFor="my_modal_7" className="btn btn-ghost">
                      <div className="indicator">Ingresar</div>
                    </label>
                  </>

                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                  <>
                    <label
                      htmlFor="my_modal_8"
                      className="btn btn-ghost"
                      onClick={() => {
                        handleSignUp(true);
                      }}
                    >
                      <div className="indicator">Crear cuenta</div>
                    </label>
                  </>
                </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Pagina Principal</a>
              </li>
              <li>
                <a>Tienda</a>
              </li>
              {/* <li>Add Document</li> */}
            </ul>
          </div>
          <Carousel></Carousel>
        
        </nav>

        <ModalLoginStore></ModalLoginStore>
        <ModalSign></ModalSign>
      </header>

      <Filters></Filters>
      <Carts></Carts>

      {
          modalAlert === "" ? <><Alerts
          msg={{
            msg1: "No estas logeado, continuaras como invitado",
            msg2: "Recuerda que la informacion se guardara temporalmente!",
            msg3: "Procura abrir una sesion",
            msg4: "Continuar!",
            type: "Init-store",
          }}
        ></Alerts>
          </> : <></>
      }

      
    </div>
  );
};
