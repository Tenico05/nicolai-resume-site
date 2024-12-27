"use client";

import React, { useState, useLayoutEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Socials from '@/components/socials';
import '../styles/theme.css';
import Portrait from '@/components/portrait';
import Contact from '@/components/contact';
import { Box, Typography, Grow, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";

const text = `Welcome to my digital resume! Use the burger menu on the top left to navigate
throughout the pages or click the buttons below!`;

const TypewriterContainer = styled('div')(() => ({
  width: '50%',
  margin: '0 auto',
  textAlign: 'center',
  color: 'var(--color-text-light)',
}));

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useLayoutEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 500);
    const typewriterTimer = setTimeout(() => setShowTypewriter(true), 1000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(typewriterTimer);
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="animated-background">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          padding: 4,
          textAlign: 'center',
          minHeight: '100vh',
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
        >
          <Portrait />
        </motion.div>

        <Fade in={showContent} timeout={700}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'var(--color-text-light)' }}>
            Nicolai Medbø
          </Typography>
        </Fade>

        <Fade in={showContent} timeout={700}>
          <Box sx={{ width: '50%', borderBottom: '2px solid var(--color-text-light)', my: 0 }} />
        </Fade>
        
        <Grow in={showTypewriter} timeout={700}>
          <TypewriterContainer>
            <Typewriter
              options={{
                strings: [text],
                autoStart: true,
                delay: 50,
                cursor: '|',
              }}
            />
          </TypewriterContainer>
        </Grow>
        
        <Fade in={showContent} timeout={700}>
          <Box>
            <Contact />
          </Box>
        </Fade>

        <Fade in={showContent} timeout={700}>
          <Box>
            <Socials />
          </Box>
        </Fade>
      </Box>
    </div>
  );
}