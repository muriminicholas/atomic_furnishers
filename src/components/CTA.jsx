import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-safari text-white text-center py-20 px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Space Today</h2>
      <p className="text-lg mb-8">Book a consultation with our expert designers and bring warm elegance to your home.</p>
      <button className="bg-teak hover:bg-white hover:text-safari font-semibold py-3 px-8 rounded-md transition duration-300">
        Book a Consultation
      </button>
    </motion.section>
  );
};

export default CTA;