import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-midnight-sea">
      <div className="flex justify-between items-center h-full px-10">
        <div className="text-white">
          <h1 className="font-semibold uppercase tracking-wider text-2xl">
            Neutrino
          </h1>
        </div>
        <ul className="hidden md:flex lg:gap-11 sm:gap-7 lg:pr-32">
          <li>
            <button
              className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
            >
              <a>Home</a>
            </button>
          </li>
          <li>
            <button
              className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
            >
              <a>Rent A Car</a>
            </button>
          </li>
          <li>
            <button
              className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
            >
              <a>Contact</a>
            </button>
          </li>
          <li>
            <button
              className="text-white font-semibold tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
            >
              <a>All Services</a>
            </button>
          </li>
          <li>
            <button
              className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
            >
              <a>About</a>
            </button>
          </li>
        </ul>
        <div className="md:hidden flex">
          <IoMdMenu
            onClick={() => setisMenuOpen(!isMenuOpen)}
            color="white"
            size={35}
          />
        </div>
      </div>

      {/* Responsive Menu */}

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-midnight-sea w-full h-[300px] transition ease-in-out delay-150`}
      >
        <ul className="flex flex-col justify-center text-center gap-y-10 transition-300 ease-in bg-midnight-sea">
          <div className="flex flex-col bg-midnight-sea gap-y-11">
            <li className="bg-midnight-sea">
              <button
                className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                <a>Home</a>
              </button>
            </li>
            <li className="bg-midnight-sea">
              <button
                className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                <a>Rent A Car</a>
              </button>
            </li>
            <li>
              <button
                className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                <a>Contact</a>
              </button>
            </li>
            <li>
              <button
                className="text-white font-semibold tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                <a>All Services</a>
              </button>
            </li>
            <li className="mb-5">
              <button
                className="text-white font-semibold  tracking-wide
              transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                <a>About</a>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
