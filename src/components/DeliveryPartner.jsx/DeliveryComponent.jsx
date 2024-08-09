import { motion } from "framer-motion";
import DemoDetail from "./DemoDetail";
import { details } from "../Menu/data";

const DeliveryComponent = () => {
  // Animation variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  // Animation variants for the details
  const detailVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  };

  return (
    <div className="flex flex-col text-center bg-white">
      <motion.h3
        className="text-red-500 text-lg font-bold font-serif mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the element is in view
        variants={headerVariants}
      >
        What We Serve
      </motion.h3>
      <motion.h1
        className="lg:w-1/3 mx-auto font-bold text-5xl my-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={headerVariants}
      >
        Your Favorite Food Delivery Partner
      </motion.h1>
      <div className="flex justify-between gap-5 px-20">
        {details.map((detail, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.3 }}
            variants={detailVariants}
          >
            <DemoDetail detail={detail} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryComponent;
