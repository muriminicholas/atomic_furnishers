import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center text-white z-10 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Affordable Luxury Inspired by Kenyan Culture
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore timeless furniture and interior pieces blending art, culture, and comfort.
        </p>
        <button className="bg-teak hover:bg-safari text-white font-semibold py-3 px-8 rounded-md transition duration-300">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;