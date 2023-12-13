
// import { Carrousel } from "../components/carrousel_gre_sto";

import { BannerPrincipal } from "../components/banner_prin_gre_sto";
import { InlineProducts } from "../components/carrousel_products_landing_gre_sto";
import { Comments } from "../components/comments_gre_sto";
import { ContactUs } from "../components/contact_us_gre_store";
import { Footer } from "../components/footer_gre_sto";
import { InfoBanner } from "../components/info_banner_gre_sto";
// import { MessageInfo } from "../components/message_info_gre_store";
import { Navigation_Gre_Sto } from "../components/navigation_gre_sto";
import { Promos } from "../components/promos_landing_gre_sto";

export const LandingPage = () => {
    return (
        <>
        <Navigation_Gre_Sto></Navigation_Gre_Sto>
        <BannerPrincipal></BannerPrincipal>
        <InfoBanner></InfoBanner>
        
        <Promos></Promos>
        
        <InlineProducts></InlineProducts>
       
        <Comments></Comments>
       
        {/* <MessageInfo></MessageInfo> */}
        <ContactUs></ContactUs>
       
        <Footer></Footer>
        
        
        {/* <Carrousel></Carrousel> */}
        </>
    );
};
