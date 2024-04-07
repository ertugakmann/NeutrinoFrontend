import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="w-full bg-gradient-to-r from-slate-900 to-slate-700 drop-shadow-2xl shadow-black h-20">
        <div className="flex mx-auto justify-between w-5/6 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-6 text-lg justify-between">
            <div>
              <a
                href="/"
                className="flex font-semibold text-white items-center "
              >
                <span className="text-3xl uppercase tracking-wide">
                  Neutrino
                </span>
              </a>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 text-white font-semibold text-[16px] ">
              <a
                href="#"
                className="transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                Home
              </a>
              <Link
                to="/rentFeed"
                className="transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                Rent A Car
              </Link>
              <a
                href="#"
                className="transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                All Services
              </a>
              <a
                href="#"
                className="transition ease-in-out delay-50 hover:-translate-y-1
              duration-300"
              >
                About
              </a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10"></div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <IoMdMenu color="white" size={35} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700  ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider mt-7">
            <a href="#" className="border-l-4 border-gray-600">
              Home
            </a>
            <a href="#">Rent A Car</a>
            <a href="#">Contact</a>
            <a href="#">All services</a>
            <a href="#">About</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
