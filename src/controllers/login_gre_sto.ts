import {
  loader_visible,
  toast_visible,
} from "../redux/reducers_slices/handler_gre_sto_slice";
import { login_successful } from "../redux/reducers_slices/login_gre_sto_slice";
import { loginService } from "../services/login_sign_service_gre_store";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginController = async (dispatch: any,email: any, password: any, setEmail: any,setPassword: any) => {
  
  try {
    dispatch(loader_visible({ msg: "", show: true }));
    
    const response = await loginService({ email, password });
    console.log(response)
    
    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);
  
    if (response.data.msg! === "Found User") {
      const element = document.querySelector("#my_modal_7") as HTMLInputElement;
      element.checked = false;
      dispatch(login_successful(response.data));
      setEmail("");
      setPassword("");
    }
    if (response.data.msg! === "Invalid password") {
      dispatch(toast_visible({ msg: "Invalid password", show: true }));
      setTimeout(() => {
        dispatch(toast_visible({ msg: "", show: false }));
      }, 15000);
    }
    if (response.data.msg! === "User not found") {
        dispatch(toast_visible({msg:"Not found email",show:true}));
      setTimeout(() => {
        dispatch(toast_visible({ msg: "", show: false }));
      }, 15000);
    }
    
  } catch (error) {
    setTimeout(() => {
        dispatch(loader_visible({ msg: '', show: false }))
      }, 2000);

  }
  
 
};
