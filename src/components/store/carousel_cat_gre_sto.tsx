export const Carousel = () => {
  return (
    <>
      <div className="col-span-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid-cols-4 gap-x-10 inline-grid">
            <div className="relative w-52 h-64">
              <img
                className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
                src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
                alt="Imagen 1"
              ></img>
              <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
            </div>
            <div className="relative w-52 h-64">
              <img
                className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
                src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
                alt="Imagen 1"
              ></img>
              <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
            </div>
            <div className="relative w-52 h-64">
              <img
                className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
                src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
                alt="Imagen 1"
              ></img>
              <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
            </div>
            <div className="relative w-52 h-64">
              <img
                className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
                src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
                alt="Imagen 1"
              ></img>
              <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
