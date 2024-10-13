import React from 'react';
import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};


const Hero = () => {
  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   window.location.href = 'https://sophia-wheat.vercel.app/';
  // };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white h-[540px] flex items-center">

      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute top-20 right-20 w-10 h-10 bg-purple-500 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-12 h-12 bg-blue-300 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
      />

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
          Stay ahead with daily top articles and audio insights from AI personas for busy professionals. Discover key trends and boost your expertise effortlessly!
        </motion.p>

        {/* <a href="https://sophia-wheat.vercel.app/" target="_self" rel="noopener noreferrer">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          // onClick={handleButtonClick}
          >
            Get Started
          </motion.button>
        </a> */}

      </div>
    </section>
  );
};

export default Hero;
