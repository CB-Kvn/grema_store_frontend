;

export const BtnFloat = () => {
  return (
    <>
      <div className="flex flex-col fixed bottom-10 right-10">
        <button className="btn-flotante z-50  animate-bounce shadow-md font-bold rounded-full mb-4">
          <img src="/src/assets/icons8-facebook-nuevo-48.png"></img>
        </button>
        <button className="btn-flotante z-50 animate-bounce shadow-md font-bold rounded-full mb-4">
          <img src="/src/assets/icons8-whatsapp-48.png"></img>
        </button>
        <button className="btn-flotante z-50 animate-bounce shadow-md font-bold rounded-full">
          <img src="/src/assets/icons8-instagram-48.png"></img>
        </button>
      </div>
    </>
  );
};
