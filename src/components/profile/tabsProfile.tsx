// import { useEffect } from "react";
import { useState } from "react";
import { UserCard } from "./user_card_gre_sto";
import { Account } from "./account_gre_sto";
import { ProfileSendOrderInformation } from "./send_order_information_gre_sto";

export const TabsProfile = () => {
  // useEffect(() => {
  //   const elementTabs = document.querySelector("#perfil") as HTMLInputElement;
  //   elementTabs.checked = true;
  // }, []);

  const [enableTab1, setEnableTab1] = useState(true)

  const handleTabs = (tab: number) => {
    
    let elementTabs2;
    let elementTabs3;
    let elementTabs4;
    switch (tab) {
      case 1:
        setEnableTab1(true)
        
        break;
      case 2:
        setEnableTab1(false)
        elementTabs2 = document.querySelector("#ordenes") as HTMLInputElement;
        elementTabs2.checked = true;
        break;
      case 3:
        setEnableTab1(false)
        elementTabs3 = document.querySelector("#carrito") as HTMLInputElement;
        elementTabs3.checked = true;
        break;
      case 4:
        setEnableTab1(false)
        elementTabs4 = document.querySelector("#favoritos") as HTMLInputElement;
        elementTabs4.checked = true;
        break;

      default:
        break;
    }
  };

  return (
    <div className=" flex justify-start mt-2 md:justify-center ">
      <div className="w-full md:w-2/3 mb-4">
        <div role="tablist" className="tabs tabs-lifted mx-4 my-6 ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab font-medium text-lg"
            aria-label="Perfil"
            id="#perfil"
            checked = {enableTab1}
            onClick={() => {
              handleTabs(1);
            }}
            style={{color:"#95806b"}}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 "
          >
            <div className=" inline-grid w-full justify-center xl:flex">
              <UserCard></UserCard>
              
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab font-medium text-lg"
            aria-label="Cuenta"
            id="#ordenes"
            onClick={() => {
              handleTabs(2);
            }}
            style={{color:"#95806b"}}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Account></Account>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab font-medium text-lg"
            aria-label="Envios"
            id="#ordenes"
            onClick={() => {
              handleTabs(2);
            }}
            style={{color:"#95806b"}}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <ProfileSendOrderInformation></ProfileSendOrderInformation>
          </div>



        </div>
      </div>
    </div>
  );
};
