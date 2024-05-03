import { useAppSelector } from "../../redux/store";
import { ButtonsNav } from "./buttons_nav_gre_sto";
import { ModalLogin } from "../sign&log/index_gre_sto";
import { OptionProfile } from "./option_profile_gre_sto";

export const Navigation_Gre_Sto = () => {
  const login = useAppSelector((state) => state.login);

  return (
    <>
      <div
        className="navbar sticky-bar h-24 fixed top-0 "
        style={{ backgroundColor: "rgba(246,218,239, 0.45)" }}
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <ButtonsNav></ButtonsNav>
            </ul>
          </div>
          <div className="w-72- h-32 hidden md:block" style={{ border: "none" }}>
            <div className="w-72 h-32 border:none mt-5 " style={{ border: "none" }}>
              <div
                className="w-64 h-24 "
                style={{
                  backgroundImage:
                    "url(https://grema-store-frontend.vercel.app/images/logoH.png",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="navbar-center block sm:hidden md:hidden">
          <div >
            <div
              className=" border:none inline-flex justify-center"
              style={{ border: "none" }}
            >
              <div
                className="w-16 h-16  my-auto"
                style={{
                  backgroundImage:
                    "url(https://grema-store-frontend.vercel.app/images/logoS.png",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden sm:block md:hidden">
          <div >
            <div
              className=" border:none inline-flex justify-center"
              style={{ border: "none" }}
            >
              <div
                className="w-64 h-24 "
                style={{
                  backgroundImage:
                    "url(https://grema-store-frontend.vercel.app/images/logoH.png",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <ButtonsNav></ButtonsNav>
          </ul>
        </div>
        <div className="navbar-end">
         
          {login.success && login.email != ""  ? (
            <OptionProfile></OptionProfile>
          ) : (
            <ModalLogin></ModalLogin>
          )}
        </div>
      </div>
    </>
  );
};
