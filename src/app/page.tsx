"use client";
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import ProductCard from './components/ProductCard';
import { products } from './assets/dummyData';
import { useRouter } from 'next/navigation';
import { Product } from './types';


const Home: React.FC = () => {
  const router = useRouter();

  const handleClick = (product: Product) => {
    console.log("Clicked", product.id);
    router.push(`/product/${product.id}`);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between animations of child components
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={3} sx={{ padding: '3em' }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={5.9} md={4} key={index}>
            <motion.div variants={itemVariants}>
              <ProductCard product={product} handleClick={() => handleClick(product)} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Home;
