export const AlertsGuest = () => {
  const handlerGuestClose = () => {
    const element = document.querySelector("#my_modal_3") as HTMLInputElement;
    element.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="my_modal_3" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                handlerGuestClose();
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hola!</h3>
          <p className="pt-4">No estas logeado, continuaras como invitado</p>
          <p className="">
            Recuerda que la informacion se guardara temporalmente!
          </p>
          <p className="font-bold">Procura abrir una sesion!</p>
          <div className="modal-action">
            <button className="btn">Continuar!</button>
          </div>
        </div>
      </div>
    </>
  );
};
