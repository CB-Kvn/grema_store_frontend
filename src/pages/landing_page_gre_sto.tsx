
import { BannerPrincipal } from "../components/landing/banner_prin_gre_sto";
import { InlineProducts } from "../components/landing/carrousel_products_landing_gre_sto";
import { ContactUs } from "../components/landing/contact_us_gre_store";
import { InfoBanner } from "../components/landing/info_banner_gre_sto";
import { Promos } from "../components/landing/promos_landing_gre_sto";
import { Navigation } from "../components/navigation/index_gre_sto";
import { images_background } from "../utils/images_store.json"


export const LandingPage = () => {

  

  return (
    <div
      className=""
      style={{
        backgroundImage:
          `url(${images_background[2]})`,
        backgroundSize: "cover",
      }}
    >
      <Navigation></Navigation>
      <BannerPrincipal></BannerPrincipal>
      <InfoBanner></InfoBanner>
      <Promos></Promos>
      <InlineProducts></InlineProducts>
      <ContactUs></ContactUs>
      
    </div>
  );
};
