
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

export const OptionProfile = () => {

  const profile = useAppSelector((state)=> state.login)
  
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src= {profile.image}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={"/profile"} className="justify-between">
            Perfil
 
          </Link>
        </li>
        <li>
          <a>Salir</a>
        </li>
      </ul>
    </div>
  );
};
