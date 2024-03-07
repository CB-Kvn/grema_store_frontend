import { Link } from "react-router-dom";





export const BannerPrincipal = () => {

  return (
    <div className="hero min-h-screen" id="/" style={{backgroundImage: 'url(https://grema-store-frontend.vercel.app/images/stock-photo-jewelry-making-flatlay-with-semi-precious-stone-beads-and-tools-handmade-jewelry-small-business-2209254561-min.jpg'}}>
    <div className="hero-overlay bg-opacity-10"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-font-nav sm:text-7xl"style={{fontFamily:'Dancing Script,cursive', color:"#393939"}}>Bienvenidos a Grema Store</h1>
        <p className="mb-5 text-2xl text-font-nav sm:text-xl" style={{color:"#393939"}}>Haz que tus recuerdos duren para siempre con nuestra bisuteria elegante y hermosa.</p>
        <Link to={"/store"}>
          <button className="btn bg-nav border-nav">Ir a la tienda</button>
        </Link>
        
      </div>
    </div>
  </div>
  );
};
