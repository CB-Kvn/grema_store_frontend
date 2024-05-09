import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { new_user_form } from "../../redux/reducers_slices/sign_up_gre_sto_slice";
import { OptionProfile } from "../navigation/option_profile_gre_sto";

export const MenuProfile = () => {
  const login = useAppSelector((state) => state.login);

  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleSignUp = (open: boolean) => {
    dispatch(new_user_form({ show: open }));
  };

  return (
    <>
      <div className=" mt-8" id="store">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
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
            <div className="border-b">
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
                      className="w-64 h-24 "
                      src="https://grema-store-frontend.vercel.app/images/logoH.png"
                      alt=""
                    />
                  </a>
                </div>

                {/* Flyout menus */}

                <div className="ml-auto flex items-center">
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

                        <span
                          className="h-6 w-px bg-gray-200"
                          aria-hidden="true"
                        />

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
                  <a>Perfil</a>
                </li>
                {/* <li>Add Document</li> */}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
