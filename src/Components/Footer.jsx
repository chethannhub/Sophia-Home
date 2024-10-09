import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-400 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-sm">
            We are dedicated to providing personalized insights and learning experiences for modern professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/feedback" className="hover:text-purple-400 transition">Feedback</a></li>
            <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="/ourstory" className="hover:text-purple-400 transition">Our Story</a></li>       
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-6">
            <FaFacebook className="hover:text-blue-500 transition" />
            <FaTwitter className="hover:text-blue-400 transition" />
            <FaLinkedin className="hover:text-blue-600 transition" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <p>Email: sophiafeedbackhub@gmail.com</p>
        </motion.div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>© 2024 Sophia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
