// import { useEffect, useState } from "react";
// import { AlertDelete } from './alert_delete_gre_sto';
// import { useAppSelector } from "../../redux/store";

import { useEffect, useState } from "react";
import { AlertDelete } from "./alert_delete_gre_sto";
import { AlertDone } from "./alert_done_gre_sto";
import { AlertAdd } from "./alert_add_gre_sto";
import { useAppDispatch } from "../../redux/store";
import { alert_type, loader_visible } from "../../redux/reducers_slices/handler_gre_sto_slice";

export const Alert = ({ typeAlert }: { typeAlert: string }) => {
  const [Component, setComponent] = useState<React.ElementType | null>(null);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loader_visible({show: true }));
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
        default:
          setComponent(() => null);
          break;
      }
      dispatch(loader_visible({ msg: "", show: false }));
    }, 1500);

    setLoading(false);
  }, [typeAlert]);

  useEffect(() => {
    console.log(Component);
  }, [Component]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);
  

  return (
    <div className="">
      {!loading ? (
        <div className="" >
          <input type="checkbox" id="my_modal_90" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div
              className= { Component ? "modal-box bg-white": "modal-box bg-transparent" }
              
            >
              {Component ? <Component component={setComponent} loading= {setLoading}/> : <></>}
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_90" onClick={()=> {setComponent(null), setLoading(true),dispatch(alert_type({ type: "" }));}}>
              Close
            </label>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
