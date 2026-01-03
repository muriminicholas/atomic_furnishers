import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-4"
    >
      <h1 className="text-2xl font-bold text-teak tracking-wide">Atomic Furnishers</h1>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-teak cursor-pointer">Home</li>
        <li className="hover:text-teak cursor-pointer">Products</li>
        <li className="hover:text-teak cursor-pointer">Services</li>
        <li className="hover:text-teak cursor-pointer">About</li>
        <li className="hover:text-teak cursor-pointer">Contact</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
