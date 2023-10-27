import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" bg-black fixed top-0 left-0 right-0 flex justify-between w-full px-[100px] max-sm:px-8 mx-auto items-center p-4">
      


      <h1 className="text-6xl font-bold text-[#00df9a] uppercase">
        OPL
      </h1>

      <ul className="flex max-md:hidden">
        <li className="text-white p-5">Home</li>
        <li className="text-white p-5">Company</li>
        <li className="text-white p-5">Contact</li>
        <li className="text-white p-5">About</li>
        <li className=" text-white p-5">Resource</li>
      </ul>


      <ul
        className={
          nav
            ? " w-[35%] fixed top-0 right-0 ease-in-out duration-100 md:hidden "
            : " w-[35%] ease-in-out top-[-1000px] right-0 duration-100 absolute md:hidden"
        }
      >
        <li className=" text-white p-8 pt-[50%] border-b border-gray-600 ">Home</li>
        <li className="bg-black text-white p-8 border-b border-gray-600">Company</li>
        <li className="bg-black text-white p-8 border-b border-gray-600">Resources</li>
        <li className="bg-black text-white p-8 border-b border-gray-600">About</li>
        <li className="bg-black text-white p-8">Contact</li>
      </ul>

      <div 
      onClick={handleNav} 
      className="fixed right-[10%] top-9 text-[#00df9a] md:hidden z-50">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>


    </div>
  );
}
