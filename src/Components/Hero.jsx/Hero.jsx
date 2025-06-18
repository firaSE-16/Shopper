import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex  md:flex-row  justify-between items-center py-10 bg-gradient-to-b from-purple-100 via-white to-white">
      <div className="lg:ml-[150px] sm:ml-[70px]   text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-[20px] text-slate-900 mb-3 font-medium">
          NEW ARRIVALS ONLY
        </h1>
        <h1 className="text-6xl md:text-4xl lg:text-8xl font-bold leading-tight">
          new{" "}
          <img
            className="w-14 h-14 inline align-middle"
            src={hand_icon}
            alt="hand waving"
          />
          <br />
          collection
          <br />
          for everyone
        </h1>
        <button className="w-64 mt-6 px-8 py-3 bg-red-500 text-white flex rounded-full items-center justify-center">
          Latest Collection
          <img className="m-3 w-5 h-3" src={arrow_icon} alt="arrow icon" />
        </button>
      </div>

      <div className="ml-[80px] w-full md:w-1/2 lg:w-2/5">
        <img className="lg:w-[80%] h-[80%] sm:w-[100%] " src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
