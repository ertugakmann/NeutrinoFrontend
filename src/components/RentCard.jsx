import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CarPhoto from "../assets/carimg.png";
import { IoPeople } from "react-icons/io5";
import { SiAirbrakedotio } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";
import { FaOilCan } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";

function RentCard({ ehu }) {
  // Log the ehu prop to understand its structure
  console.log("ehu prop:", ehu);

  // Check if ehu is an array and contains carNames property
  if (!Array.isArray(ehu)) {
    return <div>Error: Invalid data format.</div>;
  }

  // Extract car names from the ehu array
  const brandArray = ehu.flatMap((item) => item.carNames || []);

  return (
    <div className="flex flex-wrap justify-center">
      {brandArray.map((brand, index) => (
        <div
          key={index}
          className="w-[600px] h-62 bg-white m-5 p-5 flex flex-col rounded-lg shadow-lg drop-shadow-2xl transition ease-in-out delay-50 hover:-translate-y-1 duration-300"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-semibold text-red-500">
                Ekonomik Kiralık Araçlar
              </p>
              <h1 className="text-lg font-semibold">{brand}</h1>
            </div>
            <div className="flex">
              <button className="flex items-center bg-[red] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-3xl">
                Hemen Kirala
                <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-full h-full p-3">
            <img src={CarPhoto} className="w-full" />
          </div>
          <div className="flex flex-1 md:gap-16 gap-4 ml-7 mt-5">
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm text-midnight-sea tracking-wide">
                Araç Özellikleri
              </h2>
              <ul className="items-center gap-y-30 mt-4 text-sm">
                <li className="flex items-center gap-3 mb-5 ">
                  <IoPeople size={20} color="gray" /> 5 Yetişkin
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <AiOutlineSafety size={20} color="gray" /> Yolcu Airbag
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <SiAirbrakedotio size={20} color="gray" /> ABS
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <FaOilCan size={20} color="gray" /> Dizel/Benzin
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <TbManualGearbox size={20} color="gray" /> Manuel
                </li>
              </ul>
            </div>
            <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm text-midnight-sea tracking-wide">
                Kiralama Koşulları
              </h2>
              <ul className="items-center gap-y-30 mt-4 text-sm">
                <li className="flex items-center gap-3 mb-5 ">
                  <FaCalendarAlt size={20} color="gray" /> 21 Yaş ve Üzeri
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <FaRegIdCard size={20} color="gray" /> 2 Yıl Ehliyet
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <SiAirbrakedotio size={20} color="gray" /> Ehliyet Yaşı ve 1
                  Üzeri
                </li>
                <li className="flex items-center gap-3 mb-5">
                  <CiCreditCard1 size={20} color="gray" /> 1 Kredi Kartı Üzeri
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RentCard;
