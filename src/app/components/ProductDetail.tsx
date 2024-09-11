// components/ProductDetail.tsx
"use client"
import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography, Button, Grid, Box, CardMedia, Chip } from '@mui/material';
import { Product } from '../types';
import ProductCarousel from './ProductCarousel';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  allProducts: Product[];
  onProductClick: (product: Product) => void;
}

const ProductDetail: FC<ProductDetailProps> = ({ product, onAddToCart, allProducts, onProductClick }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddtoCart = () => {
    setAddedToCart(true);
    onAddToCart(product);

    setTimeout(() => setAddedToCart(false), 1000)
  }

  const cartAnimationVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      y: -100,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      sx={{
        margin: { xs: '2em', md: '4em' }, // Responsive margin using sx prop
      }}
    >
      <Grid container sx={{ padding: '1em', borderRadius: '1em', border: '2px solid white', display: 'flex', gap: "1em", justifyContent: "space-between" }}>
        <Grid item xs={12} md={5.8}>
          <CardMedia
            component="img"
            image={typeof product.image === 'string' ? product.image : ''}
            alt={product.name}
            style={{ borderRadius: '1em', objectFit: 'fill', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Chip label={product.category} color="primary" style={{ marginBottom: '10px' }} />
          <Typography variant="h6" color="violet" gutterBottom>
            {product.duration}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            ₹{product.price}
          </Typography>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <Typography variant="h6" component="h3">
              Features:
            </Typography>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <Typography variant="body1">{feature}</Typography>
                </li>
              ))}
            </ul>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddtoCart}
            style={{ marginTop: '20px' }}
          >
            Add to Cart
          </Button>

          {/* Add to Cart Animation */}
          <AnimatePresence>
            {addedToCart && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cartAnimationVariants}
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#0070f3',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                }}
              >
                {/* Use an icon or image representing the cart */}
                <Typography variant="h4" color="white">
                  🛒
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Grid>
      </Grid>

      <ProductCarousel
        products={allProducts}
        currentProductId={product.id}
        onProductClick={onProductClick}
      />
    </MotionBox>
  );
};

export default ProductDetail;
