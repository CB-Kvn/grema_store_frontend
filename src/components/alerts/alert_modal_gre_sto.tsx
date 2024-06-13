// import { useEffect, useState } from "react";
// import { AlertDelete } from './alert_delete_gre_sto';
// import { useAppSelector } from "../../redux/store";

import { useEffect, useState } from "react";
import { AlertDelete } from "./alert_delete_gre_sto";
import { AlertDone } from "./alert_done_gre_sto";
import { AlertAdd } from "./alert_add_gre_sto";
import { useAppDispatch } from "../../redux/store";
import {
  loader_visible,
} from "../../redux/reducers_slices/handler_gre_sto_slice";
import { AlertZero } from "./alert_zero_gre_sto";
import { AlertZeroCart } from "./alert_zero_cart_gre_sto";
import { AlertDoneSend } from "./alert_done_send_gre_sto";
// import { handleCartShopping } from "../store/carts_gre_sto";

export const Alert = ({ typeAlert }: { typeAlert: string }) => {
  const [Component, setComponent] = useState<React.ElementType | null>(null);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loader_visible({ show: true }));
    setTimeout(() => {
      switch (typeAlert) {
        case "delete":
          setComponent(() => AlertDelete);

          break;
        case "add":
          setComponent(() => AlertAdd);

          break;
        case "done":
          setComponent(() => AlertDone);

          break;
        case "zero":
          setComponent(() => AlertZero);
          break;
        case "zeroCart":
          setComponent(() => AlertZeroCart);
          break;
        case "msgToClient":
          setComponent(() => AlertDoneSend);

          break;
        default:
          setComponent(null);
          break;
      }

      dispatch(loader_visible({ msg: "", show: false }));
    }, 1500);
  }, [typeAlert]);

  useEffect(() => {
    setLoading(false);
  }, [Component]);

  useEffect(() => {
    console.log(Component);
  }, [Component]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className="">
      {!loading && (
        <div>
          <input type="checkbox" id="my_modal_90" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div
              className={
                Component
                  ? "modal-box  bg-white"
                  : "modal-box shadow-none bg-transparent"
              }
            >
              {Component && (
                <Component component={setComponent} loading={setLoading} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
