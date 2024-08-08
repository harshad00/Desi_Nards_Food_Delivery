import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

const DemoDetail = ({ detail }) => {
  const { img, heading, text } = detail;

  // Bounce animation for the image
  const bounceAnimation = {
    y: [0, -10, 0], // Move up by 10px and then back down
    transition: {
      duration: 2.5, // Time to complete one bounce
      ease: "easeInOut", // Smooth transition
      repeat: Infinity, // Loop the animation infinitely
    },
  };

  return (
    <div>
      <motion.img
        className="h-36 mx-auto"
        src={img}
        alt="image"
        animate={bounceAnimation} // Apply the bounce animation to the image
      />
      <h1 className="text-xl font-bold">{heading}</h1>
      <h1 className="w-3/5 mx-auto text-sm">{text}</h1>
    </div>
  );
};

export default DemoDetail;
