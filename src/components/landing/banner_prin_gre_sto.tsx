import { Link } from "react-router-dom";

export const BannerPrincipal = () => {
  return (
    <>
      <div className="mx-5">
        <div
          className={`hero min-h-screen  transition-opacity duration-1000`}
          id="/"
        >
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-center text-neutral-content bg-gray-200 bg-opacity-60 rounded-2xl">
            <div className="max-w-md">
              <h1
                className="mb-5 sx:text-3xl  xxxs:text-4xl  xxs:text-5xl font-bold text-font-nav sm:text-7xl"
                style={{
                  fontFamily: "Dancing Script,cursive",
                  color: "#393939",
                }}
              >
                Bienvenidos a Grema Store
              </h1>
              <p
                className="mb-5 xxxs:text-md xxs:text-lg text-font-nav sm:text-2xl"
                style={{ color: "#393939" }}
              >
                Haz que tus recuerdos duren para siempre con nuestra bisuteria
                elegante y hermosa.
              </p>
              <Link to={`/store/1`}>
                <button className="btn bg-nav border-nav">
                  Ir a la tienda
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
