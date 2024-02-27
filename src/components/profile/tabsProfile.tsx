import { Buttons_Profile } from "./buttons_profile_gre_sto";
import { Orders } from "./orders_user_gre_sto";
import { UserCard } from "./user_card_gre_sto";

export const TabsProfile = () => {
  return (
    <div className=" flex  justify-center mt-24 ">
      <div className="w-3/4">
        <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab tab-active">Tab 4</a>
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className=" inline-grid justify-center xl:flex">
              <UserCard></UserCard>
              <Buttons_Profile option = "information"  tab = "1"  ></Buttons_Profile>
            </div>
          </div>

          <a role="tab" className="tab">Tab 1</a>
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Orders></Orders>
            <Buttons_Profile option = ""  tab = "2"  ></Buttons_Profile>
          </div>

          <a role="tab" className="tab">Tab 2</a>
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
              <Orders></Orders>
              <Buttons_Profile option = ""  tab = "3"  ></Buttons_Profile>
          </div>
          <a role="tab" className="tab">Tab 3</a>
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
              <Orders></Orders>
              <Buttons_Profile option = ""  tab = "4"  ></Buttons_Profile>
          </div>

        </div>
      </div>
    </div>
  );
};
