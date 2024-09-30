"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import card from '../assets/card.png';
import ecommerce from '../assets/ecommerce.png';
import slider from '../assets/slider.png';
import wallspaper from '../assets/wallspaper.png';
import { StaticImageData } from "next/image";

type ImageType = {
  src: string | StaticImageData;
  topic: string;
};

const images: ImageType[] = [
  {
    src: card,
    topic: "3D Card",
  },
  {
    src: ecommerce,
    topic: "E-commerce",
  },
  {
    src: slider,
    topic: "Design Slider",
  },
  {
    src: wallspaper,
    topic: "Live 3D Wallpaper",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null); 
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [currentIndex]);

  const handleNext = () => {
    showSlider("next");
  };

  const handlePrev = () => {
    showSlider("prev");
  };

  const showSlider = (type: string) => {
    const carouselDom = carouselRef.current;

    if (!carouselDom) return;

    const sliderItems = Array.from(carouselDom.querySelectorAll(".list .item"));
    const thumbnailItems = Array.from(thumbnailRef.current?.querySelectorAll(".item") || []);

    if (type === "next") {
      sliderItems.push(sliderItems.shift()!); 
      thumbnailItems.push(thumbnailItems.shift()!);
      carouselDom.classList.add("next");
    } else {
      sliderItems.unshift(sliderItems.pop()!);
      thumbnailItems.unshift(thumbnailItems.pop()!);
      carouselDom.classList.add("prev");
    }

    setCurrentIndex((prevIndex) => 
      type === "next" ? (prevIndex + 1) % images.length : (prevIndex - 1 + images.length) % images.length
    );

    setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);
  };

  return (
    <div className="w-screen h-screen container p-4">
      <div className="relative carousel" ref={carouselRef}>
        <div className="list flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex flex-col items-center">
              <Image src={image.src as string} alt={image.topic} className="w-full h-96 object-cover" />
              <div className="content text-center mt-4">
                <div className="text-lg font-bold">Project Slide</div>
                <div className="text-sm text-gray-600">{image.topic}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail flex justify-center mt-4 space-x-4" ref={thumbnailRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer ${currentIndex === index ? "border-2 border-gray-800" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image src={image.src as string} alt={image.topic} className="w-24 h-24 object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            id="prev"
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={handlePrev}
          >
            {"<"}
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            id="next"
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </div>
  );
};

export default Carousel;
