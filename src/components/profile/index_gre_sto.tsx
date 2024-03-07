
import { Bars3Icon} from "@heroicons/react/24/outline";
import { OptionProfile } from "../navigation/option_profile_gre_sto";
import { TabsProfile } from "./tabsProfile";
import { useAppSelector } from "../../redux/store";

// const navigation = {
//   categories: [
//     {
//       id: "Mujeres",
//       name: "Mujeres",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "Basic Tees",
//           href: "#",
//           imageSrc:
//             "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.45 PM.jpeg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       sections: [
//         {
//           id: "accessories",
//           name: "Accesorios",
//           items: [
//             { name: "Aretes", href: "#" },
//             { name: "Anillos", href: "#" },
//             { name: "Collares", href: "#" },
//             { name: "Pulseras", href: "#" },
//             { name: "Sets", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "Hombres",
//       name: "Hombres",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Aretes", href: "#" },
//             { name: "Anillos", href: "#" },
//             { name: "Collares", href: "#" },
//             { name: "Pulseras", href: "#" },
//             { name: "Sets", href: "#" },
//           ],
//         },
//       ],
//     },
//   ],
// };



export const MenuProfile = () => {
  const activeLogin = useAppSelector((state) => state.login.success);




  return (
    <div className="bg-white " id="store" style={{ color: "#C2A78D" }}>
      {/* Mobile menu */}
 

      <header className="relative z-10">
        <p
          className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F6DAEF", color: "#393939" }}
        >

        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b" style={{ borderBottomColor: "#C2A78D" }}>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6"
                  aria-hidden="true"
                  style={{ color: "#C2A78D" }}
                />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-11 w-auto"
                    src="https://grema-store-frontend.vercel.app/images/Screenshot_1y.png"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}


              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">


            
                </div>



                {activeLogin ? <OptionProfile></OptionProfile> : <></>}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <TabsProfile></TabsProfile> 

{/* compenentes interior */}
    </div>
  );
};
