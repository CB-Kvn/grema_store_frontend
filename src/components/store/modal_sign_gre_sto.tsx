import { Login } from "../sign&log/login_up_gre_sto";

export const ModalSign = () => {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <Login location="store"></Login>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          
        >
          Close
        </label>
      </div>
    </>
  );
};
