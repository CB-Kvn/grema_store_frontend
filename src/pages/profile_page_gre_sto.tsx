// import { Navigation_Gre_Sto } from "../components/navigation/index_gre_sto";
import { useEffect } from "react";
import { loader_visible } from "../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch } from "../redux/store";
import { MenuProfile } from "../components/profile/menu_profile_gre_sto";
import { Account } from "../components/profile/account_gre_sto";
import { ProfileSendOrderInformation } from "../components/profile/send_order_information_gre_sto";
import { UserCard } from "../components/profile/user_card_gre_sto";
import { images_background } from "../utils/images_store.json"


export const Profile = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loader_visible({ msg: "", show: true }));
    setTimeout(() => {
      dispatch(loader_visible({ msg: "", show: false }));
    }, 1500);
  }, []);
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage:
            `url(${images_background[2]})`,
          backgroundSize: "cover",
        }}
      >
        <MenuProfile></MenuProfile>
        <div className=" flex justify-start mt-2 md:justify-center ">
          <div className="w-full  mb-4">
            <UserCard></UserCard>
            <Account></Account>
            <ProfileSendOrderInformation></ProfileSendOrderInformation>
          </div>
        </div>
        
      </div>
    </>
  );
};
