import React from "react";
import HeroIllustrate from "../assets/heroillustrate.png";
import BackgroundVideo from "../assets/backgroundvideo.mp4";

function Herosection() {
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <div className="z-[-3]">
        <video
          loop
          autoPlay
          muted
          className="object-cover w-screen h-screen fixed top-[0] left-[0] filter brightness-[80%]"
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-between items-center mb-16 mx-auto gap-x-52 text-white">
        <div className="ml-12 w-42 ">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Neutrino</h1>
          <p className="text-xl">
            Your one stop shop for all your car rental needs
          </p>
          <button
            className="bg-white hover:bg-gray-200 transition ease-in-out delay-50 hover:-translate-y-1
              duration-300 rounded-lg text-black px-4 py-2 mt-4"
          >
            Get Started
          </button>
        </div>
        <div className="h-80 w-[450px] bg-white rounded-[30px]"></div>
      </div>
    </div>
  );
}

export default Herosection;
