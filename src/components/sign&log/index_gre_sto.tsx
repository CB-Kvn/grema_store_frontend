import { new_user_form } from "../../redux/reducers_slices/sign_up_gre_sto_slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Login } from "./login_up_gre_sto";
import { SignUp } from "./sign_up_gre_sto";

export const ModalLogin = () => {
  
  const changeForm = useAppSelector((state) => state.newUser);
  const dispatch = useAppDispatch();


  const handleModal = () => {
    dispatch(new_user_form({ show: false }));
  };

  return (
    <>
    {
      !changeForm.show ? (
        <>
        <label htmlFor="my_modal_7" className="btn btn-ghost btn-circlerelative flex rounded-full bg-nav border-color: transparent">
         <div className="hidden md:block">Ingresar / Registrarse</div>
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            // stroke-width="1.5"
            stroke="currentColor"
            className="h-9 w-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      
      <div className="modal" role="dialog">
        <div className="modal-box" >
          
          <Login location=""></Login>
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
      ) : (
        <>
        <label htmlFor="my_modal_8" className="btn btn-ghost btn-circlerelative flex rounded-full bg-nav border-color: transparent">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            // stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </label>

      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" style={{backgroundImage:'url(https://grema-store-frontend.vercel.app/images/backs3.png'}} >
          
          <SignUp location={""}></SignUp>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_8"
          onClick={() => {
            handleModal()
          }}
        >
          Close
        </label>
      </div>
        </>
      )
    }
      
    </>
  );
};
