import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string | unknown;
    duration: string;
  };
  handleClick: () => void;
}

const ProductCard: FC<ProductProps> = ({ product, handleClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Card sx={{ borderRadius: "1em", ":hover": { scale: 1.02, cursor: 'pointer', boxShadow: "0 8px 12px #fff" }, transition: 'all 0.3s ease', color: `var(--foreground)`, backgroundColor: `var(--background2)` }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ ":hover": { scale: 1.08 }, transition: 'all 0.3s ease', objectFit: "fill" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
        <Typography variant="h5">{product.name}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "0 0.4em" }}>
          <Typography variant="body1" color='tomato'>₹{product.price}</Typography>
          <Typography variant="body1">{product.duration}</Typography>
        </Box>
        <Button variant='contained' fullWidth onClick={handleClick}>View Details</Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProductCard;
