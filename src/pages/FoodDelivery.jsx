import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { girl } from "../assets/img";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FoodDelivery = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.1, x: 100 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        x:0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
         "imgani",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        scale: 1,
        x: 0, 
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-screen-xl mx-auto w-[90%] lg:w-4/5 my-[5%]"
    >
      <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-6">
        <h2
          ref={titleRef}
          className="text-red-500 text-sm font-semibold mb-2"
        >
          DOWNLOAD APP
        </h2>
        <h1
          ref={titleRef}
          className="text-2xl text-wrap md:text-3xl font-bold text-gray-800 mb-4"
        >
          Get Started With Fudo Today!
        </h1>
        <p
          ref={descriptionRef}
          className="text-gray-600 mb-6"
        >
          Discover food wherever and whenever and get your food delivered
          quickly.
        </p>
        <button
          ref={buttonRef}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full"
        >
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
        <div className=" imgani p-4">
          <img
            ref={imageRef}
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
