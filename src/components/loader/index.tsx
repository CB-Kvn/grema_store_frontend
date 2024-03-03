import { useEffect } from "react";
export const Loader = () => {
  
  const handleLoader = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const element: any = document.querySelector("#my_modal_6");
    element.checked = true;
  };

  useEffect(() => {
    handleLoader();
  });
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div
          className="modal-box"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <div className="flex justify-center">
            <span
              className="loading loading-infinity loading-lg"
              style={{ width: "7.5rem", color: "#9b5176" }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};
