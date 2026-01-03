import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Loader = ({ onFinish }) => {
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
      await new Promise(res => setTimeout(res, 1200));
      await controls.start({ opacity: 0, transition: { duration: 0.8 } });
      if (onFinish) onFinish();
    };
    runAnimation();
  }, [controls, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.h1
        className="text-3xl font-bold text-teak tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Atomic Furnishers
      </motion.h1>
    </motion.div>
  );
};

export default Loader;