import React from "react";
import { girl } from "../assets/img";

const FoodDelivery = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-screen-xl mx-auto w-[90%] lg:w-4/5 my-[5%]">
      <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-6">
        <h2 className="text-red-500 text-sm font-semibold mb-2">
          DOWNLOAD APP
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Get Started With Fudo Today!
        </h1>
        <p className="text-gray-600 mb-6">
          Discover food wherever and whenever and get your food delivered
          quickly.
        </p>
        <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full">
          Get The App
        </button>
        <div className="flex items-center mt-6 justify-center md:justify-start">
          <img
            src={girl}
            alt="Richard Watson"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2"
          />
          <div>
            <p className="text-gray-800 font-semibold">Richard Watson</p>
            <p className="text-gray-600 text-sm">Food Courier</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="p-4">
          <img
            className="w-full h-auto rounded-lg"
            src="/dataImage.jpeg"
            alt="Food Delivery App Screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
