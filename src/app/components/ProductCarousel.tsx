"use client";

import { motion, useAnimation } from 'framer-motion';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { Product } from '../types';

interface ProductCarouselProps {
  products: Product[];
  currentProductId: string;
  onProductClick: (product: Product) => void;
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products, currentProductId, onProductClick }) => {
  // Filter out the current product from the list
  const remainingProducts = products.filter((product) => product.id !== currentProductId);

  const controls = useAnimation();

  const carouselVariants = {
    animate: {
      x: ['0%', '-100%'], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, 
          ease: 'linear',
        },
      },
    },
  };

  return (
    <Box sx={{ overflow: 'hidden', width: '100%', mt: 4, position: 'relative' }}>
      <motion.div
        style={{ display: 'flex', gap: '1.2em' }}
        variants={carouselVariants}
        animate={controls}
        onHoverStart={() => controls.stop()} // Pause the animation on hover
        onHoverEnd={() => controls.start('animate')} // Resume the animation on mouse leave
      >
        {remainingProducts.concat(remainingProducts).map((product, index) => (
          <motion.div
            key={`${product.id}-${index}`} // Ensure unique keys even in repeated items
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onProductClick(product)}
            style={{ cursor: 'pointer'}}
          >
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={typeof product.image === 'string' ? product.image : ''}
                alt={product.name}
                sx={{objectFit: "fill"}}
              />
              <Box p={2}>
                <Typography variant="h6" noWrap>{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">₹{product.price}</Typography>
              </Box>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default ProductCarousel;
