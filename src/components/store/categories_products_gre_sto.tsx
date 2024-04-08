export const Categories = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
            <img src="http://127.0.0.1:5173/src/assets/1.png" alt="" />
       
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div className="w-full h-16 "></div>
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div className="w-full h-16 "></div>
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div className="w-full h-16 "></div>
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}


