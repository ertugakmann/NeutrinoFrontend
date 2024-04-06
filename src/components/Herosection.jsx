import React from "react";

function Herosection() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-blue-300">
        <div className="text-white text-center">
          <h1 className="font-semibold uppercase tracking-wider text-4xl">
            Neutrino
          </h1>
          <p className="text-lg mt-4">
            A car rental service that you can trust
          </p>
          <button className="bg-white text-midnight-sea px-8 py-2 mt-4 rounded-full">
            Rent A Car
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
