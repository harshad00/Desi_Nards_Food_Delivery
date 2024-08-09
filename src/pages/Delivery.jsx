import React from "react";
import { girl } from "../assets/img";

const Delivery = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-full w-[90%] lg:w-[80%] my-5 p-6 bg-white shadow-lg rounded-lg mx-auto">
      <div className="flex justify-center mb-4 lg:mb-0 lg:mr-4 w-full lg:w-[50%]">
        <img
          src="/image.png"
          alt="Chef"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col p-5 lg:p-10">
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3 text-red-600">
            What they say
          </h3>
          <h2 className="text-gray-800 text-xl lg:text-2xl font-bold mb-2">
            What Our Customers Say About Us
          </h2>
          <p className="text-gray-600 mb-4">
            "Fudo is the best. Besides the many and delicious meals, the service
            is also very good, especially in the very fast delivery. I highly
            recommend Fudo to you."
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={girl}
            alt="Theresa Jordan"
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-800 font-semibold">Theresa Jordan</p>
            <p className="text-gray-600 text-sm">Food Enthusiast</p>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-gray-500 text-lg ml-2">4.8</span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
