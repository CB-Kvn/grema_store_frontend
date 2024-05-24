export const BannerSpecial = ({ type }: { type: string }) => {
  return (
    <>
      {type === "Oferta" ? (
        <div
          className="flex h-10 rounded-b-xl"
          style={{ background: "linear-gradient(to right, #f5b2b2, #f49d9d)" }}
        >
          <p className="m-auto" style={{color: "white" }}>Grema-Store</p>
        </div>
      ) : type === "Liquidacion" ? (
        <div
          className="flex h-10 rounded-b-xl"
          style={{ background: "linear-gradient(to right, #b2f5ea, #9df4d3)" }}
        >
          <p className="m-auto" style={{color: "#393939" }}>Liquidacion</p>
        </div>
      ) : type === "Temporada" ? (
        <div
          className="flex h-10 rounded-b-xl"
          style={{ background: "linear-gradient(to right, #a0c4ff, #a0e9ff)" }}
        >
          <p className="m-auto" style={{color: "#white" }}>Grema-Store</p>
        </div>
      ) : (
        <div
          className="flex h-10 rounded-b-xl"
          style={{ background: "linear-gradient(to right, #f7a8b8, #fbcad0)" }}
        >
          <p className="m-auto " style={{color: "#393939" }}>Grema-Store</p>
        </div>
      )}

    </>
  );
};
