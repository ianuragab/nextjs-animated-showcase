
import { motion } from 'framer-motion';

const spinnerVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const LoadingSpinner = () => {
  return (
    <motion.div
      variants={spinnerVariants}
      animate="rotate"
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '4px solid #ddd',
        borderTopColor: '#0070f3',
        margin: 'auto',
      }}
    />
  );
};

export default LoadingSpinner;
