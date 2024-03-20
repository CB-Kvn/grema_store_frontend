/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsersService } from "../interfaces/login_gre_sto_service";
import {
  loader_visible,
  password_confirm,
  password_verify,
  toast_visible,
} from "../redux/reducers_slices/handler_gre_sto_slice";
import { new_user_form } from "../redux/reducers_slices/sign_up_gre_sto_slice";
import { signService } from "../services/login_sign_service_gre_store";
import { verifyRgx } from "../utils/verify data && parse/verifyRgx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SignController = async (
  data: UsersService,
  dispatch: any,
  location: string
) => {
  try {
    dispatch(loader_visible({ msg: "", show: true }));
    const response = await signService(data);
    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 2000);

    if (response.data.msg! === "New user create in db" && location === "") {
      dispatch(new_user_form({ show: false }));
    }
    if (
      response.data.msg! === "New user create in db" &&
      location === "store"
    ) {
      // dispatch(signUp_visible({show:"Open-Login"}))
      const documentPage = document;
      const sign = documentPage.querySelector(
        "#my_modal_8"
      ) as HTMLInputElement;
      sign.checked = false;
      const log = documentPage.querySelector("#my_modal_7") as HTMLInputElement;
      log.checked = true;
    }
    if (
      response.data.msg! === "Error create new use" &&
      response.data.info === "User already exist"
    ) {
      dispatch(toast_visible({ msg: "Invalid password", show: true }));
      setTimeout(() => {
        dispatch(toast_visible({ msg: "", show: false }));
      }, 15000);
    }
    if (
      response.data.msg! === "Error create new user" &&
      response.data.s40tatus === 400
    ) {
      dispatch(toast_visible({ msg: "Not found email", show: true }));
      setTimeout(() => {
        dispatch(toast_visible({ msg: "", show: false }));
      }, 15000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const RegexVerify = (data: string, dispatch: any) => {
  const rgx = /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})\S{8,}$/;

  const valid = verifyRgx(data, rgx);
  console.log(valid);
  if (valid) {
    dispatch(password_verify({ show: false }));
  } else {
    dispatch(password_verify({ show: true }));
  }
};

export const ConfirmPassword = (
  password: string,
  passwordConfirm: string,
  dispatch: any
) => {
  if (password === passwordConfirm) {
    dispatch(password_confirm({show:false}));
    
  }
  else {
    dispatch(password_confirm({ show: true }));
    
  }
};
