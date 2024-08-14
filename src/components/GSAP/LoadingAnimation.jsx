import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './Style.css';

const LoadingAnimation = ({ onComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0); // State to track the count

  useEffect(() => {
    const loaderTl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    const textTl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    loaderTl
      .to(".loader", { opacity: 1, duration: 2 })
      .to(".loader", { opacity: 0, duration: 2, delay: 1 })
      .call(() => {
        setIsLoaded(true);
        if (onComplete) onComplete();
      });

    // Staggered animation for ul and its children (li elements)
    gsap.fromTo(
      ".loader ul",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5, // Adjust the stagger time to control delay between items
      }
    );

    gsap.fromTo(
      ".letter",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5, // Adjust the stagger time to control delay between items
      }
    );

    // Counter animation
    const counterTl = gsap.timeline({ onUpdate: () => setCount(counterTl.progress() * 100) });

    counterTl.to({}, { duration: 3, ease: "power2" });

    return () => {
      loaderTl.kill(); // Clean up the loader timeline
      textTl.kill(); // Clean up the text timeline
      counterTl.kill(); // Clean up the counter timeline
    };
  }, [onComplete]);

  if (isLoaded) return null; // Hide the component after animation

  return (
    <div className="loading-overlay flex items-center justify-center fixed inset-0 bg-white z-50">
      <div className="loader">
        <ul className="flex space-x-2 text-7xl text-red-300">
          <li className="letter">F</li>
          <li className="letter">U</li>
          <li className="letter">D</li>
          <li className="letter">O</li>
        </ul>
        <div className="relative mt-4 text-3xl font-bold text-red-300">
          {Math.round(count)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
