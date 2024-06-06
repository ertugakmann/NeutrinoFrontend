import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import RentCard from "./RentCard";

function RentFeed() {
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([]);

  const receptionOffice = useSelector((state) => state.rentals.rentals);

  useEffect(() => {
    if (receptionOffice && receptionOffice.length > 0) {
      const cityName = receptionOffice[0]?.name;
      setName(cityName);
    }
  }, [receptionOffice]);

  const sendApiRequest = async () => {
    if (name) {
      try {
        const response = await fetch(`http://localhost:3000/${name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setBrands(result);
      } catch (error) {
        console.error("Error making API request:", error);
      }
    }
  };

  useEffect(() => {
    if (name) {
      sendApiRequest();
    }
  }, [name]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 w-full h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl uppercase font-semibold tracking-widest mt-7 text-center">
            Rent Feed
          </h1>
          <span className="font-mono opacity-55 mt-3 text-center p-3">
            You can choose from there your favorite car.
          </span>
        </div>

        <div className="flex justify-center flex-wrap">
          <RentCard ehu={brands} />
        </div>
      </div>
    </>
  );
}

export default RentFeed;
