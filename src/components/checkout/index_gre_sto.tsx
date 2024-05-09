
import { AmountCheck } from "./amount_check_gre_sto";
import { ProductsCheck } from "./products_check_gre_sto";

export const CheckoutPrincipal = () => {
  return (
    <>
      <div className=" max-w-screen-xl xl:mx-auto">
        <div className="grid grid-cols-1 pt-3 pb-10 sm:grid-cols-1">
         
            <ProductsCheck></ProductsCheck>
            <AmountCheck></AmountCheck>
         
        </div>
      </div>
    </>
  );
};
