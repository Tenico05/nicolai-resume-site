"use client";

import React from 'react';
import Socials from '@/components/socials';
import '../styles/theme.css';
import Portrait from '@/components/portrait';
import Contact from '@/components/contact';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const text = `Welcome to my digital resume! Use the burger menu on the top left to navigate
throughout the pages or click the buttons below!`;

const charCount = text.length;

const TypewriterContainer = styled('div')(() => ({
  width: '50%',
  margin: '0 auto',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'pre',
  display: 'inline-block',
  color: 'var(--color-text-light)',
  animation: `typing 4s steps(${charCount}, end) forwards, blink-caret 0.75s step-end 5`
}));

export default function Home() {
  return (
    <div className="animated-background">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          padding: 4,
          textAlign: 'center'
        }}
      >
        <Portrait />

        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'var(--color-text-light)' }}>
           Nicolai Medbø
        </Typography>
          <Box sx={{ width: '50%', borderBottom: '2px solid var(--color-text-light)', my: 0 }} />
        
        <TypewriterContainer>
          {text}
        </TypewriterContainer>
        
        <Contact />
        <Socials />
      </Box>
    </div>
  );
}
