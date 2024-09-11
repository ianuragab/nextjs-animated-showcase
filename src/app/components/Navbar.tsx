// components/Navbar.tsx
"use client";

import { AppBar, Toolbar, IconButton, InputBase, Badge, Box } from '@mui/material';
import { Search, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '../assets';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box component={motion.div} initial={{ opacity: 0, scale: 0.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} onClick={() => router.push("/")}>
          <Image src={Logo.src} alt="Logo" width={140} height={60} />
        </Box>

        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: '40%', bgcolor: 'white', borderRadius: '4px', p: 0.5 }}>
          <Search sx={{ color: '#0070f3', mr: 1 }} />
          <InputBase placeholder="Search…" sx={{ width: '100%' }} />
        </Box>

        {/* Icons Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* User Profile Icon */}
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>

          {/* Add to Cart Icon */}
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error"> {/* Example badge count */}
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
