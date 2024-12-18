"use client";

import { useState } from "react";
import imgtesti1 from "../../public/testi1.png";
import imgtesti2 from "../../public/testi2.png";

export default function Testimoni() {
  const testimonials = [
    {
      image: imgtesti1.src,
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      name: "Evren Shah",
      role: "Designer",
    },
    {
      image: imgtesti2.src,
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      name: "Flora Sheen",
      role: "Designer",
    },
    {
      image: imgtesti1.src,
      text: "Another example of an incredible journey in designing.",
      name: "Jordan Lane",
      role: "Developer",
    },
    {
      image: imgtesti2.src,
      text: "Another example of an incredible journey in designing.",
      name: "Ana Mendes",
      role: "Developer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | null
  >(null);

  const handlePrev = () => {
    setAnimationDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setAnimationDirection(null);
    }, 300); // Increase delay for smoother transition
  };

  const handleNext = () => {
    setAnimationDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationDirection(null);
    }, 300); // Increase delay for smoother transition
  };

  const visibleCards = [testimonials[currentIndex]];

  return (
    <div className="w-[90%] sm:w-[80%] h-auto flex flex-col justify-start items-center">
      <h1 className="text-[30px] sm:text-[40px] pb-10 text-center">
        My <b>Testimonial</b>
      </h1>
      <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 relative">
        {/* Left Arrow Button */}
        <button
          className="text-2xl bg-black text-white w-[50px] h-[50px] rounded-full absolute left-[-30px] sm:left-[-80px] z-10"
          onClick={handlePrev}
        >
          &#8592;
        </button>

        {/* Cards */}
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`xl:w-[30%] sm:w-[70%] w-[90%] m-5 rounded-xl shadow-2xl ${
              animationDirection === "left"
                ? "animate-slide-left"
                : animationDirection === "right"
                ? "animate-slide-right"
                : ""
            } ${index === 0 ? "bg-black text-white" : "bg-white"}`}
            style={{
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div className="xl:w-full xl:h-full flex flex-col justify-center items-center p-4 sm:p-12 gap-5">
              <img
                src={card.image}
                alt=""
                className="xl:w-[80px] sm:w-[120px] w-[100px] rounded-full"
              />
              <h3 className="text-center xl:text-sm sm:text-base text-xs sm:text-sm">
                {card.text}
              </h3>
              <hr className="text-center border-y-[1.5px] border-black w-1/2 mx-auto" />
              <h2 className="font-bold text-xl">{card.name}</h2>
              <h4 className="text-[#71717A] font-bold">{card.role}</h4>
            </div>
          </div>
        ))}

        {/* Right Arrow Button */}
        <button
          className="text-2xl bg-black text-white w-[50px] h-[50px] rounded-full absolute right-[-30px] sm:right-[-80px] z-10"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex gap-2 mt-5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
