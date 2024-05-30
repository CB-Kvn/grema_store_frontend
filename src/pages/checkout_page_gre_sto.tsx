import { Alert } from "../components/alerts/alert_modal_gre_sto";
import { AmountCheck } from "../components/checkout/amount_check_gre_sto";
import { ProductsCheck } from "../components/checkout/products_check_gre_sto";
import { MenuProfile } from "../components/profile/menu_profile_gre_sto";
import { images_background } from "../utils/images_store.json"

export const Checkout = () => {
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
        <div className=" max-w-screen-xl xl:mx-auto">
          <div className="grid grid-cols-1 pt-3 pb-10 sm:grid-cols-1">
            <ProductsCheck></ProductsCheck>
            <AmountCheck></AmountCheck>
          </div>
        </div>
      </div>
      <Alert typeAlert={"done"}></Alert>
    </>
  );
};
