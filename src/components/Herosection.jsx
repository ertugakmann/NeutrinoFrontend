import React from "react";
import BackgroundVideo from "../assets/backgroundvideo.mp4";
import axios from "axios";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const people = [
  { id: 1, name: "London" },
  { id: 2, name: "Brighton" },
  { id: 3, name: "Southampton" },
  { id: 4, name: "Bournemouth" },
  { id: 5, name: "Manchester" },
  { id: 6, name: "Liverpool" },
];

function Herosection() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full h-[100vh] flex justify-between items-center">
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
      <div className="flex flex-col md:flex-row items-center mb-16 mx-auto gap-x-52 text-white">
        <div className="ml-12 w-42 ">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Neutrino</h1>
          <p className="text-xl">
            Your one stop shop for all your car rental needs
          </p>
        </div>
        <div className="h-80 w-[93%] md:w-[450px] mt-16 items-center bg-white rounded-[30px] p-5">
          {/* Teslim Alma Ofisi Input */}
          <div className="flex flex-1">
            <p className="mb-7 text-midnight-sea text-center">Reception Desk</p>
            <div className="inline-block ml-0.5 h-[45px] min-h-[1em] w-0.5 self-stretch bg-[#10192C]"></div>
            <div className="ml-4 mb-3 w-72">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1 z-10 ">
                  <div className="relative w-full  cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 bg-[whitesmoke] focus:ring-0"
                      displayValue={(office) => office.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"></Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  ></span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
          </div>
          {/* Teslim Etme Ofisi Input */}
          <div className="flex flex-1">
            <p className="mb-7 text-midnight-sea text-center">
              Delivery Location
            </p>
            <div className="inline-block h-[45px] min-h-[1em] w-0.5 self-stretch bg-[#10192C] relative left-[-8px] "></div>
            <div className="ml-2 mb-3 w-72">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1 ">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 bg-[whitesmoke] focus:ring-0"
                      displayValue={(person) => person.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"></Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  ></span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
          </div>
          {/* Tarih Input */}
          <div className="flex justify-center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-[150px] py-2  text-md  tracking-wide text-gray-900 bg-[whitesmoke] text-center"
            />
            <hr className="w-[30px] mt-4 ml-4" />
            <DatePicker
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
              className="w-[150px] py-2 ml-5  text-md  tracking-wide text-gray-900 bg-[whitesmoke] text-center"
            />
          </div>
          <div className="flex mx-auto mt-7 justify-end">
            <button
              className="bg-[red] hover:bg-red-600 transition ease-in-out delay-50 hover:-translate-x-[-5px]
              duration-300 rounded-lg text-white px-4 py-2 mt-4 font-semibold flex items-center "
            >
              <Link to="/rentFeed">Fırsatlara Göz At</Link>
              <IoIosArrowForward className="ml-2 rounded-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
