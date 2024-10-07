import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/getstarted');
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white h-[540px] flex items-center">
      <div className="max-w-2xl mx-auto text-center p-2">
        <motion.h1
          className="text-4xl font-bold  mb-2 p-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: 'clamp(2rem, 3.2vw, 3.8rem)' }}
        >
          Elevate Your Knowledge: Curated Insights, Anytime, Anywhere
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: 'clamp(1.2rem, 2vw, 1.25rem)' }}
        >
          Stay ahead with our daily selection of top articles and engaging audio insights from AI personas tailored for busy professionals.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleButtonClick}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
