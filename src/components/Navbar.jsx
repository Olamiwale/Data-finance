import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between w-[80%] mx-auto items-center p-4">
      <h1 className="text-3xl font-bold text-[#00df9a] uppercase max-md:hidden">
        React
      </h1>
      <ul className="flex max-md:hidden">
        <li className="text-white p-5">Home</li>
        <li className="text-white p-5">Company</li>
        <li className="text-white p-5">Contact</li>
        <li className="text-white p-5">About</li>
        <li className=" text-white p-5">Resource</li>
      </ul>

      

      <h1 className=" fixed left-[10%] top-5 text-3xl text-[#00df9a] font-bold uppercase md:hidden z-50 p-4">
        React
      </h1>

      <ul
        className={
          nav
            ? " w-[50%] md:hidden fixed top-[0] left-0 ease-in-out duration-1000 "
            : " w-full ease-in-out duration-1000 absolute top-[10%] left-[-100%] "
        }
      >
        <li className=" bg-black text-white p-8 pt-[50%] border-b border-gray-600">Home</li>
        <li className="bg-black text-white p-8 border-b border-gray-600">Company</li>
        <li className="bg-black text-white p-8 border-b border-gray-600">Resources</li>
        <li className="bg-black text-white p-8 border-b border-gray-600">About</li>
        <li className="bg-black text-white p-8">Contact</li>
      </ul>

      <div onClick={handleNav} className="fixed right-[10%] top-9 text-[#00df9a] md:hidden z-50">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}
