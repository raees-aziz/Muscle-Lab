import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const exercises = [
  { title: "Barbell Basics", img: "/image/exercise.jpg" },
  { title: "Hantelbell Masterclass", img: "/image/exercise2.jpg" },
  { title: "Cardio Power Boost", img: "/image/exercise3.avif" },
  { title: "Hypertrophy", img: "/image/exercise4.jpg" },
  { title: "Rope Climbing", img: "/image/exercise5.jpg" },
  { title: "TRX Suspension", img: "/image/exercise6.jpg" },
];

const GymProduct = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h4 className="fade-title2 text-6xl md:text-8xl text-center text-white font-bebas-neue">
        Train Smarter <br /> Unleash your Fitness
      </h4>

      <p className="text-gray-300 text-center text-lg md:text-xl mt-4">
        Unlock Your Fully Potential With Our Expertly Designed Courses,
        Tailored To Help You <br className="hidden md:block" />
        Maximum Result In Less Time
      </p>

      <div className="mt-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {exercises.map((exercise, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl shadow-lg ">
                <img
                  src={exercise.img}
                  alt={exercise.title}
                  className="w-full h-[600px] object-cover grayscale 
                  transform transition duration-500"
                />

                <div className="bg-black/60 text-main font-bebas-neue 
                text-3xl p-4 text-center">
                  {exercise.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GymProduct;
