import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-neutralgray text-gray-700 py-6 text-center border-t"
    >
      <p className="text-sm">© 2026 Atomic Furnishers and Interiors Nairobi — All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
  <a 
    href="www.instagram.com[your-username]" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-teak"
  >
    Instagram
  </a>
  <a 
    href="www.tiktok.com@[your-username]" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-teak"
  >
    TikTok
  </a>
  <a 
    href="https://www.pinterest.com/[your-username]" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-teak"
  >
    Pinterest
  </a>
</div>

    </motion.footer>
  );
};

export default Footer;