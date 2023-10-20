import React from "react";
import Single from "../assets/single01.png";
import Double from "../assets/double02.png";
import Triple from "../assets/triple03.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="w-[90%] flex mx-auto gap-5 max-md:grid">
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 border max-md:w-[50%] m-auto mt-[70px]">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>

          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="border-b p-4">500 GB Storage</p>
            <p className="border-b p-4">1 Granted User</p>
            <p className="border-b p-4">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#2bc090]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 border max-md:w-[50%] m-auto mt-[70px]">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double Users</h2>

          <p className="text-center text-4xl font-bold">$350</p>
          <div className="text-center font-medium">
            <p className="border-b p-4">750 GB Storage</p>
            <p className="border-b p-4">1 Granted User</p>
            <p className="border-b p-4">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#2bc090]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 border max-md:w-[50%] m-auto mt-[70px]">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple Users</h2>

          <p className="text-center text-4xl font-bold">$520</p>
          <div className="text-center font-medium">
            <p className="border-b p-4">1000 GB Storage</p>
            <p className="border-b p-4">1 Granted User</p>
            <p className="border-b p-4">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#2bc090]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
