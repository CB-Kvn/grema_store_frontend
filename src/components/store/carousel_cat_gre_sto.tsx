
import { Swiper, SwiperSlide } from "swiper/react";
import { images_categories } from "../../utils/images_store.json"
import "swiper/css";
import "swiper/css/pagination";

import "./styles_carrousel.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Carousel = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={25}
        breakpoints={{
          512: {
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle "
              src={images_categories[0]}
              alt="Imagen 1"
            />
            <div className="absolute inset-10 flex justify-center items-center ">
              <h1
                className="mb-5 text-5xl font-bold text-font-nav sm:text-5xl text-white"
                style={{
                  fontFamily: "Dancing Script,cursive",
                }}
              >
                Collares
              </h1>
            </div>
            <div className="absolute inset-0 w-full h-full mask mask-squircle bg-slate-500 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700 "></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src={images_categories[1]}
              alt="Imagen 1"
            />
            <div className="absolute inset-10 flex justify-center items-center">
              <h1
                className="mb-5 text-5xl font-bold text-font-nav sm:text-5xl text-white"
                style={{
                  fontFamily: "Dancing Script,cursive",
                }}
              >
                Aretes
              </h1>
            </div>
            <div className="absolute inset-0 w-full h-full mask mask-squircle bg-slate-500 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700 "></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src={images_categories[2]}
            />
            <div className="absolute inset-10 flex justify-center items-center">
              <h1
                className="mb-5 text-5xl font-bold text-font-nav sm:text-5xl text-white"
                style={{
                  fontFamily: "Dancing Script,cursive",
                }}
              >
                Pulseras
              </h1>
            </div>
            <div className="absolute inset-0 w-full h-full mask mask-squircle bg-slate-500 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700 "></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src={images_categories[3]}
            />
            <div className="absolute inset-10 flex justify-center items-center">
              <h1
                className="mb-5 text-5xl font-bold text-font-nav sm:text-5xl text-white"
                style={{
                  fontFamily: "Dancing Script,cursive",
                }}
              >
                Sets
              </h1>
            </div>
            <div className="absolute inset-0 w-full h-full mask mask-squircle bg-slate-500 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700 "></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-52 h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover mask mask-squircle"
              src={images_categories[4]}
              alt="Imagen 1"
            />
            <div className="absolute inset-10 flex justify-center items-center">
              <h1
                className="mb-5 text-5xl font-bold text-font-nav sm:text-5xl text-white"
                style={{
                  fontFamily: "Dancing Script,cursive",
                }}
              >
                Anillos
              </h1>
            </div>
            <div className="absolute inset-0 w-full h-full mask mask-squircle bg-slate-500 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-60 hover:duration-700 "></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
