export const BannerPrincipal = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://grema-store-frontend.vercel.app/images/stock-photo-jewelry-making-flatlay-with-semi-precious-stone-beads-and-tools-handmade-jewelry-small-business-2209254561-min.jpg'}}>
    <div className="hero-overlay bg-opacity-10"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-7xl font-bold text-font-nav sm:text-4xl"style={{fontFamily:'Dancing Script,cursive'}}>Bienvenidos a Grema Store</h1>
        <p className="mb-5 text-2xl text-font-nav">Haz que tus recuerdos duren para siempre con nuestra bisuteria elegante y hermosa.</p>
        <button className="btn bg-nav border-nav">Ir a la tienda</button>
      </div>
    </div>
  </div>
  );
};
