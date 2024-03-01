import { useEffect, useState } from "react";

export const Buttons_Profile = ({ option,tab }: { option: string, tab: string } ) => {

  const [label, setLabel] = useState("")

  useEffect(() => {
    handleButton(tab)
  },[tab])

  const handleButton = (tab:string) => {
      if(tab === '2'){
        setLabel("Re-comprar")
      }
      if(tab === '3'){
        setLabel("Pagar")
      }
      if(tab === '4'){
        setLabel("Enviar Carrito")
      }
  }
  
  return (
    <div className="mt-8">
      <div className="inline-grid justify-center ml-4 ">
        {option === "information" ? (
          <>
            <button className="btn btn-active btn-neutral mt-4" style={{backgroundColor: "#F6DAEF", borderColor: '#9b5176', color: '#95806b'}}>
              Editar datos personales{" "}
            </button>
            <button className="btn btn-active btn-neutral mt-4"  style={{backgroundColor: "#F6DAEF", borderColor: '#9b5176', color: '#95806b'}}>
              Restablecer contrasena
            </button>
          </>
        ) : (
          <div>
            
            <button className="btn btn-active btn-neutral mt-4"  style={{backgroundColor: "#F6DAEF", borderColor: '#9b5176', color: '#95806b'}}>
              {label}
              
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
