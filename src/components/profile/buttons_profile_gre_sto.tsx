import { useEffect, useState } from "react";

export const Buttons_Profile = ({ option,tab }: { option: string, tab: string } ) => {

  const [label, setLabel] = useState("")

  useEffect(() => {
    handleButton(tab)
  },[tab])

  const handleButton = (tab:string) => {
      if(tab === '2'){
        setLabel("Volver a comprar marcados")
      }
      if(tab === '3'){
        setLabel("Proceder a pago")
      }
      if(tab === '4'){
        setLabel("Enviar a carrito marcados")
      }
  }
  
  return (
    <div className="mt-8">
      <div className="inline-grid justify-center ">
        {option === "information" ? (
          <>
            <button className="btn btn-active btn-neutral mt-4">
              Editar datos personales{" "}
            </button>
            <button className="btn btn-active btn-neutral mt-4">
              Restablecer contrasena
            </button>
          </>
        ) : (
          <div>
            
            <button className="btn btn-active btn-neutral mt-4">
              {label}
              
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
