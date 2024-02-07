import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Filters } from "./filters_gre_store";
// import { useAppDispatch } from '../../redux/store'
// import { bannerCommercial_visible } from '../../redux/reducers_slices/handler_gre_sto_slice'
import { BannerCommercial } from "./banner_commercial_gre_store";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { OptionProfile } from "../navigation/option_profile_gre_sto";
import { Login } from "../sign&log/login_up_gre_sto";
import { SignUp } from "../sign&log/sign_up_gre_sto";
import { new_user_form } from "../../redux/reducers_slices/sign_up_gre_sto_slice";
import { Carts } from "./carts_gre_sto";

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
  const activeLogin = useAppSelector((state) => state.login.success);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handlingBannerCommercial = () => {
    setOpen(false);
  };
  const handleSignUp = (open:boolean) =>{
    dispatch(new_user_form({show: open }));
  }
 
  return (
    <div className="bg-white mt-8" id="store" style={{ color: "#C2A78D" }}>
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
                  <div
                    className="border-b"
                    style={{ borderBottomColor: "#C2A78D" }}
                  >
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
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                
                                className="mt-6 block font-medium" style={{ borderBottomColor: "#C2A78D" }} 
                              >
                                <span
                                  className="absolute inset-0 z-10" style={{ borderBottomColor: "#C2A78D" }}
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
                              className="font-medium" style={{ borderBottomColor: "#C2A78D" }}
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
                                    className="-m-2 block p-2"style={{ borderBottomColor: "#C2A78D" }}
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
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
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
        <p
          className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F6DAEF", color: "#393939" }}
        >
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b" style={{ borderBottomColor: "#C2A78D" }}>
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
                  style={{ color: "#C2A78D" }}
                />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-11 w-auto"
                    src="https://grema-store-frontend.vercel.app/images/Screenshot_1y.png"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover
                      key={category.name}
                      className="flex"
                      style={{ color: "#C2A78D" }}
                    >
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open ? "Pop selected" : "Pop"
                              )}
                              onClick={() => {
                                handlingBannerCommercial();
                              }}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition.Root
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8 py-4">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <div
                                                key={item.name}
                                                className="flow-root"
                                              >
                                                <button
                                                  type="button"
                                                  className="-m-2 block p-2 text-gray-500"
                                                  onClick={() =>
                                                    handlingBannerCommercial()
                                                  }
                                                >
                                                  {item.name}
                                                </button>
                                              </div>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition.Root>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <>
                      <label htmlFor="my_modal_7" className="btn btn-ghost">
                        <div className="indicator">
                          
                            Ingresar
                          
                        </div>
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_7"
                        className="modal-toggle"
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <Login></Login>
                        </div>
                        <label
                          className="modal-backdrop"
                          htmlFor="my_modal_7"
                          onClick={() => {
                            console.log("Cerrando modal");
                          }}
                        >
                          Close
                        </label>
                      </div>
                    </>

                    {/* <a
                          href="#"
                          className="text-sm font-medium "
                          style={{ color: "#C2A78D" }}
                          onClick={() => {
                            console.log("Hola");
                          }}
                        >
                          Ingresar
                        </a>
                         */}

                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                    <>
                      <label htmlFor="my_modal_8" className="btn btn-ghost" onClick={()=>{handleSignUp(true), console.log("Hola")}}>
                        <div className="indicator">
                          
                            Crear cuenta
                          
                        </div>
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_8"
                        className="modal-toggle"
                        
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <SignUp></SignUp>
                        </div>
                        <label
                          className="modal-backdrop"
                          htmlFor="my_modal_8"
                          onClick={() => {
                            console.log("Cerrando modal");
                          }}
                        >
                          Close
                        </label>
                      </div>
                    </>


                  </div>
                

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-300 group-hover:text-gray-600"
                      aria-hidden="true"
                      style={{ color: "#C2A78D" }}
                    />
                    <span
                      className="ml-2 text-sm font-medium"
                      style={{ color: "#C2A78D" }}
                    >
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

                {activeLogin ? <OptionProfile></OptionProfile> : <></>}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {!open ? <BannerCommercial></BannerCommercial> : <></>}

      <Filters></Filters>
      <Carts></Carts>
    </div>
  );
};
