// import './nav-bar-styles.css'
import { Link } from "react-scroll";
import { navigation } from "../../utils/navigation_btn.json";

export const ButtonsNav = () => {
  
  return (
    <>
      {navigation.map((item) => (
        <ul>
          <li className=" ">
          <Link
            activeClass=""
            to={item.to}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
          >
            {item.name}
          </Link>
          
        </li>
        </ul>
        
      ))}
    </>
  );
};
