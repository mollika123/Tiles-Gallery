"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const images = [
  "/scutorea.jpg",
  "/venetian.jpg"
];

const Banner = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">

      {/* 🔥 Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/5 z-10"></div>

      {/* 🔥 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl text-white font-bold">
          Discover Your Perfect Aesthetic
        </h1>

        <Link
          href="/all-tiles"
          className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Browse Now
        </Link>
      </div>

    </div>
  );
};

export default Banner;