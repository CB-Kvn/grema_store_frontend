import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "/src/assets/1.png";
import slide_image_2 from "/src/assets/2.png";
import slide_image_3 from "/src/assets/3.png";
import slide_image_4 from "/src/assets/4.png";
import { EffectCoverflow, Autoplay,Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Carousel = () => {
  return (
    <div className="container my-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        <SwiperSlide className="w-1/2 text-left text-xl">
          <div className="relative">
            <div className="absolute z-10 top-1/2 -translate-y-1/2 left-9 ">
            <p className="block courgette-regular text-3xl">¿Quieres destacar en </p>
            <p className="block courgette-regular text-3xl">cualquier evento?</p>
              <p className="block"> Nuestros sets de bisuteria son la clave.</p>
              {/* <p className="block">
                 Detalles exquisitos y calidad incomparable,
              </p>
              <p> te garantizamos que robarás miradas donde quiera que vayas.</p> */}
            </div>

            <LazyLoadImage
              src={slide_image_1}
              alt=""
              className=" object-cover object-center rounded-2xl"
            ></LazyLoadImage>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-1/2 text-left text-xl">
          <div className="relative">
            <div className="absolute z-10 top-1/2 -translate-y-1/2 left-5 ">
            <p className="block courgette-regular text-3xl">¿Lista para brillar?</p>
              <p className="block "> Nuestros aretes son el complemento  </p>
              <p className="block ">ideal para cualquier ocasión.</p>
              {/* <p className="block">
                 Detalles exquisitos y calidad incomparable,
              </p>
              <p> te garantizamos que robarás miradas donde quiera que vayas.</p> */}
            </div>

            <LazyLoadImage
              src={slide_image_2}
              alt=""
              className=" object-cover object-center rounded-2xl"
            ></LazyLoadImage>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-1/2 text-left text-xl">
          <div className="relative">
            <div className="absolute z-10 top-1/2 -translate-y-1/2 left-9 ">
              
              <p className="block courgette-regular text-3xl">¡Completa tu look con una </p>
              <p className="block courgette-regular text-3xl">pulsera que hable por ti!</p>
              <p className="block"> Nuestra colección cuenta con una</p>
              <p className="block">variedad de estilos</p>
              {/* <p className="block">
                 Detalles exquisitos y calidad incomparable,
              </p>
              <p> te garantizamos que robarás miradas donde quiera que vayas.</p> */}
            </div>

            <LazyLoadImage
              src={slide_image_3}
              alt=""
              className=" object-cover object-center rounded-2xl"
            ></LazyLoadImage>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-1/2 text-left text-xl">
          <div className="relative">
            <div className="absolute z-10 top-1/2 -translate-y-1/2 left-5 ">
              <p className="block courgette-regular text-3xl">¿Buscas el regalo perfecto</p>
              <p className="block courgette-regular  text-3xl">para esa persona especial?</p>
              <p className="block"> Nuestros collares son la respuesta. </p>
              <p className="block">ocasión.</p>
              {/* <p className="block">
                 Detalles exquisitos y calidad incomparable,
              </p>
              <p> te garantizamos que robarás miradas donde quiera que vayas.</p> */}
            </div>

            <LazyLoadImage
              src={slide_image_4}
              alt=""
              className=" object-cover object-center rounded-2xl"
            ></LazyLoadImage>
          </div>
        </SwiperSlide>

      
      </Swiper>
    </div>
  );
};
