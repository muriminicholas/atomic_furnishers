import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Mid-Century Sofa', img: '/placeholder1.jpg' },
    { id: 2, name: 'Teak Coffee Table', img: '/placeholder2.jpg' },
    { id: 3, name: 'Safari Lounge Chair', img: '/placeholder3.jpg' },
    { id: 4, name: 'Modern Bookshelf', img: '/placeholder4.jpg' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-16 px-6 md:px-12 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-safari">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-neutralgray rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-600">
              <span>Image Placeholder</span>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
