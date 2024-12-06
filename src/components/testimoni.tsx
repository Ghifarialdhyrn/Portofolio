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
    }, 100);
  };

  const handleNext = () => {
    setAnimationDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationDirection(null);
    }, 100);
  };

  const visibleCards = testimonials.slice(currentIndex, currentIndex + 3);

  if (visibleCards.length < 3) {
    visibleCards.push(...testimonials.slice(0, 3 - visibleCards.length));
  }

  return (
    <div className="w-[80%] h-[545px] flex flex-col justify-start items-center">
      <h1 className="text-[40px] pb-10 text-center">
        My <b>Testimonial</b>
      </h1>
      <div className="w-full h-[100%] flex flex-row justify-center gap-10">
        <button
          className="text-2xl bg-black text-white w-[50px] h-[50px] rounded-full mt-48"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`w-[25%] m-5 rounded-xl shadow-2xl ${
              animationDirection === "left"
                ? "animate-slide-left"
                : animationDirection === "right"
                ? "animate-slide-right"
                : ""
            } ${index === 1 ? "bg-black text-white" : "bg-white"}`}
          >
            <div className="w-full h-full flex flex-col justify-center items-center p-12 gap-5">
              <img src={card.image} alt="" />
              <h3 className="text-center">{card.text}</h3>
              <hr className="text-center border-y-[1.5px] border-black w-1/2" />
              <h2 className="font-bold text-xl">{card.name}</h2>
              <h4 className="text-[#71717A] font-bold">{card.role}</h4>
            </div>
          </div>
        ))}
        <button
          className="text-2xl bg-black text-white w-[50px] h-[50px] rounded-full mt-48"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
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
