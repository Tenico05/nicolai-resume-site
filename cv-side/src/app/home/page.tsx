"use client";

import React from 'react';
import Socials from '@/components/socials';
import '../styles/theme.css';
import Portrait from '@/components/portrait';
import Contact from '@/components/contact';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <div className="animated-background">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          padding: 4,
        }}
      >
        <Portrait />
        <Contact />
        <Socials />
      </Box>
    </div>
  );
}
