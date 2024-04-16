import React, { useState } from "react";

const images = [
  "https://grema-store-frontend.vercel.app/images/backs9.jpg",
  "https://grema-store-frontend.vercel.app/images/backs10.jpg",
  "https://grema-store-frontend.vercel.app/images/backs11.jpg",
  "https://grema-store-frontend.vercel.app/images/backs12.jpg",
  "https://grema-store-frontend.vercel.app/images/backs13.jpg",
  "https://grema-store-frontend.vercel.app/images/backs14.jpg",
];

export const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const nextSlide = () => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    };
  
    setTimeout(nextSlide, 3000);
  
    return (
      <div className="">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-auto ${
              index === currentImage ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          />
        ))}
      </div>
    );
  };
