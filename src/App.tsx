import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing_page_gre_sto";
import { Store } from "./pages/store_page_gre_sto";
import { Profile } from "./pages/profile_page_gre_sto";
import { InvoiceToSend } from "./pages/invoice_to_send_gre_sto";
import { Loader } from "./components/loader";
import { useAppSelector } from "./redux/store";


export const App =()=> {

 
  const loader = useAppSelector((state) => state.handler.loader_visible.show);

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/store" element={<Store></Store> }></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route> 
      <Route path="/invoice" element={<InvoiceToSend></InvoiceToSend>}></Route>
    </Routes>
    
    { loader ? <Loader></Loader> : <></>}
    
    </>
    
  );
}
