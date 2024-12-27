"use client";

import React, { useState, useLayoutEffect } from "react";
import "../styles/theme.css";
import { Container, Box, Typography, Divider, Grow, Avatar, Card, CardContent, Grid, CircularProgress, ImageList, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Hiking, GolfCourse, Surfing } from '@mui/icons-material';

interface AboutContentProps {
  imageData: Array<{ img: string; title: string }>;
}

export default function AboutContent({ imageData = [] }: AboutContentProps) {
  const [showParagraphs, setShowParagraphs] = useState(false);

  useLayoutEffect(() => {
    const timer = setTimeout(() => setShowParagraphs(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="animated-background"
      style={{
        minHeight: "100vh",
        padding: "2rem 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
            <Box position="relative" display="inline-flex">
              <CircularProgress
                size={120}
                thickness={2}
                sx={{
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  zIndex: 1,
                  color: 'primary.main',
                }}
              />
              <Avatar
                alt="Nicolai Medbø"
                src="/headshot.png?height=100&width=100"
                sx={{ width: 100, height: 100, position: 'relative', zIndex: 2 }}
              />
            </Box>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "var(--color-text-light)",
                ml: 3,
              }}
            >
              About Me
            </Typography>
          </Box>
        </motion.div>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 4 }} />

        <Grow in={showParagraphs} timeout={800}>
          <Box sx={{ color: "var(--color-text-light)", lineHeight: 1.7, fontSize: "1rem" }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="body1" paragraph>
                  Hello, I'm Nicolai Medbø, a 22-year-old based in Oslo who has nurtured a passion for technology
                  since childhood. My journey began around the age of twelve, experimenting with a Minecraft mod
                  called ComputerCraft. Over time, I explored Scratch programming and gradually moved on to basic
                  web development with HTML and CSS. This early curiosity eventually guided me toward higher education.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Code sx={{ fontSize: 40}} />
                    <Typography variant="h6">IT</Typography>
                    <Typography variant="body2">Passionate about coding and technology</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Typography variant="body1" paragraph>
              After completing high school, I enrolled at Kristiania University College to pursue a Bachelor's
              degree in Programming. By June 2024, I had built a strong foundation in software development
              practices and a solid understanding of contemporary tech stacks. With each new project, I
              discovered more about my capabilities and interests, reinforcing my dedication to crafting clean,
              efficient, and purposeful code.
            </Typography>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="body1" paragraph>
                  Outside of my technological interests I love being active. For the past four years, I've been
                  regularly visiting the gym, and I take great pleasure in hiking and reaching new mountaintops.
                  I'm also an avid gamer, always up for trying something new. Recently, I've developed a fondness
                  for golf—a pursuit that challenges both my focus and patience. Still, one of my deepest passions
                  is photography, both digital and analogue. Capturing a moment in time, experimenting with
                  composition, and exploring the interplay of light and shadow bring me a sense of creative
                  fulfillment that complements my technical side.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box display="flex" justifyContent="space-around" mb={1}>
                      <Hiking sx={{ fontSize: 40 }} />
                      <GolfCourse sx={{ fontSize: 40 }} />
                      <Surfing sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography variant="h6">Outdoor Activities</Typography>
                    <Typography variant="body2">Enjoy hiking, golfing, and surfing</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Typography variant="body1" paragraph>
              Above all, I appreciate being around people. I consider myself socially adaptable and enjoy
              meeting new faces, whether it's on a development team following agile principles or a group of
              fellow golfers on a weekend outing. Balancing approachability with professionalism, I aim to
              contribute positively to any environment I join. In essence, I'm eager to apply my technical
              skills, personal interests, and social versatility to create, learn, and connect—both
              professionally and personally.
            </Typography>

            {imageData.length > 0 && (
              <Box mt={4} mb={4}>
                <ImageList sx={{ width: '100%', height: 'auto' }} cols={imageData.length === 1 ? 1 : 2} rowHeight={250}>
                  {imageData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            )}
          </Box>
        </Grow>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mt: 4 }} />

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontStyle: "italic",
            color: "var(--color-text-light)",
            mt: 2,
          }}
        >
          Thank you for taking the time to learn more about me.
        </Typography>
      </Container>
    </div>
  );
}