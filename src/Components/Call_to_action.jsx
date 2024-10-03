import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 flex justify-center items-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Ready to Personalize Your Learning?
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Explore curated content and engage with AI-driven insights for a richer, more meaningful learning experience.
        </p>
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CallToAction;
