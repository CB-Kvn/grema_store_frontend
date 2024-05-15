import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { update_information } from "../redux/reducers_slices/login_gre_sto_slice";
import { changePasswordService, deleteUserService, updateUserService } from "../services/profile_service_gre_sto";




// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const changePasswordController = async (dispatch: any, email: any, password: any, passwordNew: any, setPasswordOld?: any, setPasswordNew?: any) => {

    try {
        dispatch(loader_visible({ msg: "", show: true }));

        const response = await changePasswordService({ email, password, passwordNew });

        if (response?.msg === "Update passord") {
            setPasswordOld("");
            setPasswordNew("")
        }
        if (response?.msg === "Invalid password") {
            setPasswordOld("");
            setPasswordNew("")
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
export const deleteUserController = async (dispatch: any, id:string) => {

    try {
        dispatch(loader_visible({ msg: "", show: true }));

        const response = await deleteUserService({ id });

        if (response?.msg === "Delete profile") {
           console.log("Delete profile")
        }
        if (response?.msg === "Error delete profile") {
            console.log("Error delete profile")
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
export const updateUserController = async (dispatch: any, id:string, address:string,phone:string) => {

    try {
        dispatch(loader_visible({ msg: "", show: true }));

        const response = await updateUserService({ id, address,phone });

        if (response?.msg === "Update profile") {
            dispatch(update_information({address:response.data.user.profile.address ,phone:response.data.user.cellphone}))
           console.log("Update profile")
        }
        if (response?.msg === "Error update profile") {
            console.log("Error update profile")
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
