
import { AddressInfo } from "./address_info_gre_sto";
import { Notification } from "./notifications_gre_sto";
import { SignPersonalInfo } from "./sign_personal_info_gre_sto";
import { ProfileData } from "./profile_data_gre_store";
import { useAppSelector } from "../../redux/store";


export const SignUp = ({ location }: { location: string }) => {
  const info = useAppSelector((state)=> state.handler.info_user.page)



  return (
    <>
      <div
        className="text-font-nav text-3xl flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8"
        style={{
          color: "#393939",
          fontSize: "medium",
          fontWeight: "500",
        }}
        // style={{ fontFamily: "Dancing Script,cursive" }}
        
      >
        <div className="transition ease-out duration-500 transform hover:scale-105">
          
            <div className="space-y-2">
              {info == 0 ? (
                <SignPersonalInfo></SignPersonalInfo>
              ) : info == 1 ? (
                <ProfileData></ProfileData>
              ) : info == 2 ? (
                <AddressInfo></AddressInfo>
              ) : info == 3 ? (
                <Notification location={location}></Notification>
              ) : (
                <></>
              )}

             
            </div>
          
        </div>
      </div>
    </>
  );
};
