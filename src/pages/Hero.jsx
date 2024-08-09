import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-white p-5">
      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
        <h1 className="font-heading lg:w-[35vw] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center lg:text-left">
          Be The FastestIn Delivering Your{" "}
          <samp className="text-[#eb5757]">Food</samp>
        </h1>
        <p className="mt-2 font-primary text-gray-500 text-center lg:text-left">
          Our job is to fill your tummy with delicious <br /> food and with fast
          and free delivery.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row justify-center lg:justify-start space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
          <button className="bg-red-500 hover:bg-red-700 rounded-full text-white font-bold py-2 px-4 ">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-gray-100 text-gray-700 hover:outline  rounded-full font-semibold py-2 px-4 ">
            <i
              className="fa-solid text-2xl px-2 fa-caret-right"
              style={{ color: "#FFD43B" }}
            ></i>{" "}
            Watch Video
          </button>
        </div>
        <div className="mt-10 text-center md:flex gap-3 justify-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <img
              className="h-12 w-12 object-cover  rounded-full"
              src="./imgs/heroimg.png"
              alt="Happy Customer"
            />
            <div className="ml-3 ">
              <p className="text-sm  font-semibold text-gray-700">
                Our Happy Customer
              </p>
              <p className="text-xs text-gray-500">4.8 (125K reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-0 lg:w-1/2 relative flex justify-center  items-center">
        <div className="absolute  w-[30vw] h-[45vh] md:bg-[#eb5757] rounded-full z-10" />

        <img
          src="./imgs/heroimg.png"
          alt="Hero"
          className="max-w-full z-20  h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
