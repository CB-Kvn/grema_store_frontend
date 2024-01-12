import { useAppSelector } from "../../redux/store";
import { ButtonsNav } from "./buttons_nav_gre_sto";
import { ModalLogin } from "../sign&log/index_gre_sto";
import { OptionProfile } from "./option_profile_gre_sto";

export const Navigation_Gre_Sto = () => {
  const activeLogin = useAppSelector((state) => state.login.success);
  return (
    <>
      <div className="navbar sticky-bar bg-nav h-20 fixed top-0">
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
          <div className="w-60 h-20" style={{border:'none'}} >
            <div className="w-60 h-20 border:'none' " style={{border:'none'}}>
              <div className="w-44 h-20" style={{backgroundImage: 'url(https://grema-store-frontend.vercel.app/images/Screenshot_11.png', backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',border:'none'}}></div>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <ButtonsNav></ButtonsNav>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {activeLogin ? (
            <OptionProfile></OptionProfile>
          ) : (
            <ModalLogin></ModalLogin>
          )}
        </div>
      </div>
    </>
  );
};