
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles_carrousel.css";

// import required modules
import { Pagination } from "swiper/modules";

export const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          512:{
            slidesPerView: 2,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
              alt="Imagen 1"
            ></img>
            <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
              alt="Imagen 1"
            ></img>
            <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
              alt="Imagen 1"
            ></img>
            <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src="https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg"
              alt="Imagen 1"
            ></img>
            <div className="absolute inset-0 w-full h-full  mask mask-squircle hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
