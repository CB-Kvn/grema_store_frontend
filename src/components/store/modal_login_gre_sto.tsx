// import { new_user_form } from "../../redux/reducers_slices/sign_up_gre_sto_slice";
// import { useAppDispatch } from "../../redux/store";
import { Login } from "../sign&log/login_up_gre_sto";
// import { SignUp } from "../sign&log/sign_up_gre_sto";

export const ModalLoginStore = () => {
  // const dispatch = useAppDispatch()
  // const handleModal = () => {
  //   dispatch(new_user_form({ show: false }));
  // }
  return (
    <>
     

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" >
        <Login location="store"></Login>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};
