import { motion, AnimatePresence } from 'framer-motion';
import { data } from './data';
import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data[1].items.length - itemsToShow : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data[1].items.length - itemsToShow ? 0 : prevIndex + 1));
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="p-5 rounded-xl bg-gradient-to-r from-light-blue-50 via-white shadow-lg overflow-hidden">
      {/* upper div */}
      <div className='flex justify-between border-b-2 border-blue-gray-700 pb-4 mb-4'>
        <div className='flex justify-center lg:my-auto space-x-4'>
          <button onClick={handlePrev} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button onClick={handleNext} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* lower div */}
      <div className="flex flex-col justify-between text-indigo-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-row justify-center space-x-4 w-full"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.6 }}
          >          
            {data[1].items.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
              <div key={index} className="flex flex-col items-center w-1/3">
                <img src={item.img} className='h-80 w-72 object-cover' alt="" />
                <div className='w-full p-4 text-center'>
                  <h3 className="text-2xl font-bold text-indigo-900">{item.name}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
