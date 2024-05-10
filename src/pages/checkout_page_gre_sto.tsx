import { CheckoutPrincipal } from "../components/checkout/index_gre_sto";
import { MenuProfile } from "../components/profile/menu_profile_gre_sto";

export const Checkout = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage:
            "url(https://grema-store-frontend.vercel.app/images/backs6.png",
          backgroundSize: "cover",
        }}
      >
        <MenuProfile></MenuProfile>
        <CheckoutPrincipal></CheckoutPrincipal>
      </div>
    </>
  );
};
