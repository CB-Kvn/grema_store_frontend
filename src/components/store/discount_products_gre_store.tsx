import { LazyLoadImage } from "react-lazy-load-image-component";

export const Discount = () => {
  return (
    <>

<div className="collapse bg-base-200 my-5 mx-auto max-w-6xl px-2 sm:px-2 lg:px-2">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    Click aqui - Descuentos
  </div>
  <div className="collapse-content"> 
  <div className="flex flex-wrap justify-center">
        <div className="w-32 sm:w-44 md:w-48 lg:w-52 xl:w-52 mx-4">
          <LazyLoadImage
            className="w-72 h-auto mask mask-squircle"
            src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-31 at 11.43.09 PM (1).jpeg"
            alt="Image 1"
          />
          <div className="flex flex-wrap justify-center">
            <div className="badge badge-outline">Descuento</div>
          </div>
        </div>
        <div className="w-32 sm:w-44 md:w-48 lg:w-52 xl:w-52  mx-4 ">
          <LazyLoadImage
            className="w-72  h-auto mask mask-squircle"
            src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-31 at 11.43.08 PM.jpeg"
            alt="Image 2"
          />
          <div className="flex flex-wrap justify-center">
            <div className="badge badge-outline sm:text-sm">Descuento</div>
          </div>
        </div>
        <div className="w-32 sm:w-44 md:w-48 lg:w-52 xl:w-52  mx-4 ">
          <LazyLoadImage
            className="w-72  h-auto mask mask-squircle"
            src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-31 at 11.43.09 PM.jpeg"
            alt="Image 3"
          />
          <div className="flex flex-wrap justify-center">
            <div className="badge badge-outline">Descuento</div>
          </div>
        </div>
        <div className="w-32 sm:w-44 md:w-48 lg:w-52 xl:w-52  mx-4 ">
          <LazyLoadImage
            className="w-72  h-auto mask mask-squircle"
            src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-31 at 11.43.09 PM.jpeg"
            alt="Image 3"
          />
          <div className="flex flex-wrap justify-center">
            <div className="badge badge-outline">Descuento</div>
          </div>
        </div>
      </div>
  </div>
</div>

      
    </>
  );
};
