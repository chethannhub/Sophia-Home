import React from "react";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


import Beginnig from '../assets/Beginning.png';
import Growth from '../assets/Growth.png';
import Future from '../assets/Future.png';

const OurStory = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/getstarted');
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl font-bold p-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: 'clamp(2rem, 3.2vw, 3.8rem)' }}
          >
            Our Story
          </motion.h1>
          <motion.h1
            className="text-5xl font-bold mb-4 p-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: 'clamp(2rem, 3.2vw, 3.8rem)' }}
          >
            Empowering Learning & Growth
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.25rem)' }}
          >
            We are on a mission to simplify learning for professionals, with
            AI-driven, personalized insights that fit seamlessly into your life.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="space-y-16">
          <motion.div
            className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-1">
              <img
                src={Beginnig}
                alt="Our Journey"
                className="rounded-lg shadow-lg mt-4 w-full h-52 object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-purple-300 mb-4">
                <FaRocket className="inline-block mr-2" /> The Beginning
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Our journey started with the need to make information more
                accessible for professionals overwhelmed by the constant flow of
                content. We created a platform that sifts through thousands of
                sources, bringing you personalized insights right at your
                fingertips.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row-reverse md:space-x-8 space-y-8 md:space-y-0 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-1">
              <img
                src={Growth}
                alt="Our Growth"
                className="rounded-lg shadow-lg mt-4 w-full h-52 object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-blue-300 mb-4">
                <FaUsers className="inline-block mr-2" /> Our Growth
              </h2>
              <p className="text-gray-400 leading-relaxed">
                From a small team to a thriving community, we've grown into a
                platform that delivers curated, AI-driven content to thousands
                of professionals daily. Our focus on learning, growth, and
                engagement remains central as we expand.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-1">
              <img
                src={Future}
                alt="Our Future"
                className="rounded-lg shadow-lg mt-4 w-full h-52 object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-green-300 mb-4">
                <FaLightbulb className="inline-block mr-2" /> Looking Forward
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Our future lies in continued innovation. With AI at the
                forefront, we aim to not only empower professionals but also
                build a sustainable, investor-friendly platform that leads the
                way in AI-driven learning.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Join Us on This Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Together, we can create a world where learning and growth are
            effortless, where your time is optimized, and where opportunities
            for investors are abundant.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition"
            onClick={handleButtonClick}

          >
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
