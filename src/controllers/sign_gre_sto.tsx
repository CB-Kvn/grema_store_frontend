import { UsersService } from "../interfaces/login_gre_sto_service";
import { loader_visible} from "../redux/reducers_slices/handler_gre_sto_slice";
import { new_user_form } from "../redux/reducers_slices/sign_up_gre_sto_slice";
import { signService } from "../services/login_sign_service_gre_store";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signController = async (data:UsersService,dispatch:any) =>{
    try {
        dispatch(loader_visible({ msg: "", show: true }));
        const response = await signService(data)
        setTimeout(() => {
            dispatch(loader_visible({ msg: "", show: false }));
          }, 2000);
        

          if (response.data.msg! === "New user create in db") {
            dispatch(new_user_form({show:false}))
            // const documentPage = document;
            // const  sign = documentPage.querySelector("#my_modal_8") as HTMLInputElement;
            // sign.checked = false;
            // sign.checked = true;
            // const log = documentPage.querySelector("#my_modal_7") as HTMLInputElement;
            // log.checked = true;
            // dispatch(login_successful(response.data));
            
          }
          // if(response.data.msg! === "New user create in db" && location === "store" ){
          //   // dispatch(signUp_visible({show:"Open-Login"}))
          //   // const documentPage = document;
          //   // const  sign = documentPage.querySelector("#my_modal_8") as HTMLInputElement;
          //   // sign.checked = false;
          // }
          if (response.data.msg! === "Error create new use" && response.data.info === "User already exist") {
            // dispatch(toast_visible({ msg: "Contrasena invalida", show: true }));
            // setTimeout(() => {
            //   dispatch(toast_visible({ msg: "", show: false }));
            // }, 15000);
          }
          if (response.data.msg! === "Error create new user" && response.data.s40tatus === 400 ) {
            //   dispatch(toast_visible({msg:"Correo electronico no existe",show:true}));
            // setTimeout(() => {
            //   dispatch(toast_visible({ msg: "", show: false }));
            // }, 15000);
          }

          // const log = documentPage.querySelector("#my_modal_7") as HTMLInputElement;
          // log.checked = true;
          // dispatch(login_successful(response.data));
    } catch (error) {
        console.log(error)
    }
}