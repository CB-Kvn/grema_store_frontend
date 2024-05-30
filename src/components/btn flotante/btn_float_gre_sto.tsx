import  {images_social} from "../../utils/images_store.json"

export const BtnFloat = () => {
  return (
    <>
      <div className="flex flex-col fixed bottom-10 right-10">
        <button className="btn-flotante z-50  animate-bounce shadow-md font-bold rounded-full mb-4">
          <img src={images_social[0]}></img>
        </button>
        <button className="btn-flotante z-50 animate-bounce shadow-md font-bold rounded-full mb-4">
          <img src={images_social[1]}></img>
        </button>
        <button className="btn-flotante z-50 animate-bounce shadow-md font-bold rounded-full">
          <img src={images_social[2]}></img>
        </button>
      </div>
    </>
  );
};
