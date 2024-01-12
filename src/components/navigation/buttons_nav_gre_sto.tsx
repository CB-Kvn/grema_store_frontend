// import './nav-bar-styles.css'
import { Link } from "react-scroll";
const navigation = [
  { name: "Inicio", href: "#", current: true, to:'home', offset:50},
  { name: "Tienda", href: "#", current: false,to:'store', offset:50},
  { name: "Conozcanos", href: "#", current: false,to:'about-us', offset:-25},
  { name: "Promociones", href: "#", current: false, to:'promotions', offset:-80},
  { name: "Destacados", href: "#", current: false, to:'store-pre', offset:-150 },
  { name: "Experiencias", href: "#", current: false, to:'comments', offset:-60 },
  { name: "Contactenos", href: "#", current: false, to:'contacts', offset:-150 },
];

export const ButtonsNav = () => {
  return (
    <>
      {navigation.map((item) => (
        <li className=" ">
          <Link
            activeClass=""
            to= {item.to}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
          >{item.name}</Link>
        </li>
      ))}
    </>
  );
};
