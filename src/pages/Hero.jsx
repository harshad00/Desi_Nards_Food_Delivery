// HeroSection.js
import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoadingAnimation from "../components/GSAP/LoadingAnimation";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = '';
    }

    return () => {
      // Clean up on component unmount
      document.body.style.overflow = '';
    };
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
      
      tl.from(".hero-img", { opacity: 0, y: 100, duration: 2 })
        .from(headingRef.current, { opacity: 0, x: -50, duration: 1 }, "-=1")
        .from(paragraphRef.current, { opacity: 0, x: 50, duration: 1 }, "-=0.5")
        .from(buttonRef.current.children, { opacity: 0, y: 20, duration: 1, stagger: 0.2 }, "-=0.5");
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      <div className="flex justify-center items-center lg:h-screen">
        <div className={`flex flex-col lg:flex-row items-center  justify-center bg-white p-5 ${loading ? 'hidden' : ''}`}>
          <div className="flex flex-col items-center lg:items-start flex-wrap lg:w-1/2">
            <h1
              ref={headingRef}
              className="font-heading lg:w-[35vw] w-[100vw] text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center lg:text-left"
            >
              Be The Fastest In Delivering Your{" "}
              <samp className="text-[#eb5757]">Food</samp>
            </h1>
            <p
              ref={paragraphRef}
              className="mt-2 font-primary text-gray-500 text-center lg:text-left"
            >
              Our job is to fill your tummy with delicious <br /> food and with fast
              and free delivery.
            </p>
            <div
              ref={buttonRef}
              className="mt-5 flex flex-col sm:flex-row justify-center lg:justify-start space-x-0 space-y-4 sm:space-x-4 sm:space-y-0"
            >
              <button className="bg-red-500 hover:bg-red-700 rounded-full text-white font-bold py-2 px-4 transition-transform transform hover:scale-105">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-gray-700 hover:outline rounded-full font-semibold py-2 px-4 transition-transform transform hover:scale-105">
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
                  className="h-12 w-12 object-cover rounded-full"
                  src="./imgs/heroimg.png"
                  alt="Happy Customer"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-700">
                    Our Happy Customer
                  </p>
                  <p className="text-xs text-gray-500">4.8 (125K reviews)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-1/2 relative flex justify-center items-center">
            <div className="hero-z-index absolute w-[30vw] h-[45vh] lg:bg-[#eb5757] rounded-full" />
            <img
              src="./imgs/heroimg.png"
              alt="Hero"
              className="hero-img max-w-full z-20 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
