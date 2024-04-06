import React from "react";
import HeroIllustrate from "../assets/heroillustrate.png";

function Herosection() {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-r from-slate-700 to-slate-800 flex justify-between">
      <div className="flex justify-between items-center mb-16 mx-auto gap-x-52  text-white">
        <div className="ml-12 w-42">
          <h1 className="text-5xl font-bold  mb-4">Welcome to Neutrino</h1>
          <p className="text-xl">
            Your one stop shop for all your car rental needs
          </p>
          <button className="bg-white text-black px-4 py-2 mt-4">
            Get Started
          </button>
        </div>
        <div className="hidden lg:flex h-[900]px] ">
          <div className="rounded-[30%_70%_70%_30%_/_13%_26%_74%_87%]  w-[500px] bg-white  container">
            <img className="h-[300px] pt-5 w-full" src={HeroIllustrate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
