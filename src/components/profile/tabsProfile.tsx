import { Buttons_Profile } from "./buttons_profile_gre_sto";
import { Orders } from "./orders_user_gre_sto";
import { UserCard } from "./user_card_gre_sto";

export const TabsProfile = () => {
  return (
    <div className=" flex  justify-center mt-24 ">
      <div className="w-3/4">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Perfil de Usuario"
            id="Perfil de Usuario"
            
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className=" inline-grid justify-center xl:flex">
              <UserCard></UserCard>
              <Buttons_Profile option = "information"  tab = "1"  ></Buttons_Profile>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Ordenes de compras"
            id= "Ordenes de compras"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Orders></Orders>
            <Buttons_Profile option = ""  tab = "2"  ></Buttons_Profile>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Carrito de compras"
            id="Carrito de compras"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
              <Orders></Orders>
              <Buttons_Profile option = ""  tab = "3"  ></Buttons_Profile>
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Favoritos"
            id="Favoritos"
          />
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
