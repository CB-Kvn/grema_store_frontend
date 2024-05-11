import { LazyLoadImage } from "react-lazy-load-image-component";

export const BtnFloat = () => {
  return (
    <>
      <div className="flex flex-col fixed bottom-10 right-10">
        <button className="btn-flotante z-50  animate-bounce shadow-md font-bold rounded-full mb-4">
          <LazyLoadImage src="/src/assets/icons8-facebook-nuevo-48.png"></LazyLoadImage>
        </button>
        <button className="btn-flotante z-50 animate-bounce shadow-md font-bold rounded-full mb-4">
          <LazyLoadImage src="/src/assets/icons8-whatsapp-48.png"></LazyLoadImage>
        </button>
        <button className="btn-flotante z-50 animate-bounce shadow-md font-bold rounded-full">
          <LazyLoadImage src="/src/assets/icons8-instagram-48.png"></LazyLoadImage>
        </button>
      </div>
    </>
  );
};
