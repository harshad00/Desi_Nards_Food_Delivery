import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { girl } from "../assets/img";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Delivery = () => {
  const deliveryRef = useRef(null);
  const h3Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const imgani = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      deliveryRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2, // Add a delay
        scrollTrigger: {
          trigger: deliveryRef.current,
          start: "top 80%", // Trigger when top of element is 80% from top of viewport
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      h3Ref.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4, // Add a delay
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      h2Ref.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.6, // Add a delay
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        delay: 0.8, // Add a delay
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      imgani.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1, // Add a delay
        ease: "power2.out",
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={deliveryRef}
      className="flex flex-col lg:flex-row justify-center items-center h-full w-[90%] lg:w-[80%] my-5 p-6 bg-white shadow-lg rounded-lg mx-auto"
    >
      <div className="flex justify-center mb-4 lg:mb-0 lg:mr-4 w-full lg:w-[50%]">
        <img
          src="/image.png"
          alt="Chef"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col p-5 lg:p-10">
        <div className="mb-6">
          <h3
            ref={h3Ref}
            className="text-sm font-semibold mb-3 text-red-600"
          >
            What they say
          </h3>
          <h2
            ref={h2Ref}
            className="text-gray-800 text-xl lg:text-2xl font-bold mb-2"
          >
            What Our Customers Say About Us
          </h2>
          <p
            ref={pRef}
            className="text-gray-600 mb-4"
          >
            "Fudo is the best. Besides the many and delicious meals, the service
            is also very good, especially in the very fast delivery. I highly
            recommend Fudo to you."
          </p>
        </div>
        <div ref={imgani} className="flex items-center mb-4">
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
