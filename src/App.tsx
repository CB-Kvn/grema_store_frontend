import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing_page_gre_sto";
import { Store } from "./pages/store_page_gre_sto";
import { Profile } from "./pages/profile_page_gre_sto";

export default function Example() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/store" element={<Store></Store>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route> 
    </Routes>
  );
}
