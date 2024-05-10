import "./styles.css";
export const InvoiceTemplate = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>
              Gracias por <br></br> confiar <span>en nosotros</span>
            </h2>
          </div>
        </div>
        <div>
        <div className="image">
          <img src="/src/assets/logologo.png" alt=""></img>
        </div>
        <div className="button">
          <a href="/" className="btn">
            Confirmar tu orden de compra
          </a>
        </div>


        </div>
        
      </div>
    </>
  );
};
