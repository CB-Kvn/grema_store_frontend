// import { Carrousel } from "../components/carrousel_gre_sto";

import { BannerPrincipal } from "../components/landing/banner_prin_gre_sto";
import { InlineProducts } from "../components/landing/carrousel_products_landing_gre_sto";
import { Comments } from "../components/landing/comments_gre_sto";
import { ContactUs } from "../components/landing/contact_us_gre_store";
import { Footer } from "../components/landing/footer_gre_sto";
import { InfoBanner } from "../components/landing/info_banner_gre_sto";
import { Navigation_Gre_Sto } from "../components/navigation/index_gre_sto";
import { Promos } from "../components/landing/promos_landing_gre_sto";

export const LandingPage = () => {
  return (
    <>
      <Navigation_Gre_Sto></Navigation_Gre_Sto>
      <BannerPrincipal></BannerPrincipal>
      <InfoBanner></InfoBanner>
      <Promos></Promos>
      <InlineProducts></InlineProducts>
      <Comments></Comments>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};
