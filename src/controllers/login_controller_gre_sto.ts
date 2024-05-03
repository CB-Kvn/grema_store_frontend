
import { LoginInit } from "../interfaces/login_interface_gre_sto";
import {
  loader_visible,
  toast_visible,
} from "../redux/reducers_slices/handler_gre_sto_slice";
import { login_successful_guest, refresh_token } from "../redux/reducers_slices/login_gre_sto_slice";
import { loginGuestService, loginRefreshService, loginService } from "../services/login_sign_service_gre_store";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginController = async (dispatch: any, email: any, password: any, setEmail?: any, setPassword?: any) => {

  try {
    dispatch(loader_visible({ msg: "", show: true }));

    const response = await loginService({ email, password });

    if (response?.msg === "Found User") {
      const element = document.querySelector("#my_modal_7") as HTMLInputElement;
      element.checked = false;
      dispatch(login_successful_guest({ data: response.data }));
      setEmail("");
      setPassword("");
    }
    if (response?.msg === "Invalid password") {
      dispatch(toast_visible({ msg: "Invalid password", show: true }));
      setTimeout(() => {
        dispatch(toast_visible({ msg: "", show: false }));
      }, 15000);
    }
    if (response?.msg === "User not found") {
      dispatch(toast_visible({ msg: "Not found email", show: true }));
      setTimeout(() => {
        dispatch(toast_visible({ msg: "", show: false }));
      }, 15000);
    }

    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);

  } catch (error) {
    setTimeout(() => {
      dispatch(loader_visible({ msg: '', show: false }))
    }, 2000);

  }


};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginGuestController = async (dispatch: any, email: string, password: string) => {

  try {
    dispatch(loader_visible({ msg: "", show: true }));
    const response = await loginGuestService({ email, password });
    console.log(response)

    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);

    if (response.data.msg! === "Found User") {
      dispatch(login_successful_guest(response.data));

    }

    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);

  } catch (error) {
    setTimeout(() => {
      dispatch(loader_visible({ msg: '', show: false }))
    }, 2000);

  }


};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginRefreshController = async (dispatch: any, login: LoginInit) => {

  try {
    dispatch(loader_visible({ msg: "", show: true }));
    console.log(login)
    const response = await loginRefreshService(login)

    console.log(response)
    if (response.data.msg! === "Token generate") {


      dispatch(refresh_token(response.data))
    }


    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);


  } catch (error) {
    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);
  }

}