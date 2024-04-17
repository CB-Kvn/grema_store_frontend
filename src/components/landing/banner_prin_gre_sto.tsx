import { Link } from "react-router-dom";


// const images = [
//   "https://grema-store-frontend.vercel.app/images/backs9.jpg",
//   "https://grema-store-frontend.vercel.app/images/backs10.jpg",
//   "https://grema-store-frontend.vercel.app/images/backs11.jpg",
//   "https://grema-store-frontend.vercel.app/images/backs12.jpg",
//   "https://grema-store-frontend.vercel.app/images/backs13.jpg",
//   "https://grema-store-frontend.vercel.app/images/backs14.jpg",
// ];

export const BannerPrincipal = () => {


  return (
    <>
     
        <div
          className={`hero min-h-screen transition-opacity duration-1000`}
          id="/"
          style={{
            backgroundImage:
              `url(https://grema-store-frontend.vercel.app/images/backs9.jpg)`,
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content bg-white bg-opacity-30 rounded-2xl">
            <div className="max-w-md">
              <h1
                className="mb-5 text-5xl font-bold text-font-nav sm:text-7xl"
                style={{
                  fontFamily: "Dancing Script,cursive",
                  color: "#393939",
                }}
              >
                Bienvenidos a Grema Store
              </h1>
              <p
                className="mb-5 text-2xl text-font-nav sm:text-xl"
                style={{ color: "#393939" }}
              >
                Haz que tus recuerdos duren para siempre con nuestra bisuteria
                elegante y hermosa.
              </p>
              <Link to={"/store"}>
                <button className="btn bg-nav border-nav">
                  Ir a la tienda
                </button>
              </Link>
            </div>
          </div>
        </div>
      
    </>
  );
};
