import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 flex justify-center">
      <div className="max-w-5xl w-full">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          {/* Limited Plan */}
          <motion.div
            className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/3 text-center transition-transform duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >

            <div className="flex flex-col items-center">
              <div className="mb-2">
                <FaRegStar className="text-yellow-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white text-center">Limited</h3>
            </div>

            <p className="text-gray-400 mb-2">Start for Free</p>
            <p className="text-5xl font-bold text-white mb-4">₹0/month</p>
            <button className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-md mb-6 hover:bg-gray-500 transition">
              Try for Free
            </button>
            <ul className="space-y-2 text-left text-gray-300">
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Top articles of the day</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Daily newsletters</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Community access</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Basic analytics</li>
            </ul>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/3 text-center transition-transform duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >


            <div className="flex flex-col items-center">
              <div className="mb-2">
                <FaStar className="text-yellow-400 text-2xl" /> {/* Larger star icon */}
              </div>
              <h3 className="text-2xl font-semibold text-white text-center">Premium</h3>
            </div>

            <p className="text-gray-400 mb-2">Full NewsTeller Experience</p>
            <p className="text-5xl font-bold text-white mb-4">₹99/month</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-md mb-6 hover:from-blue-500 hover:to-purple-500 transition">
              Get Started
            </button>
            <ul className="space-y-2 text-left text-gray-300">
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Everything in Limited</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Exclusive content</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Advanced analytics</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Priority support</li>
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-gray-400 mb-6">
            Choose a plan that best fits your needs and start your journey with us today!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-md hover:from-purple-500 hover:to-blue-400 transition">
            Join Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
