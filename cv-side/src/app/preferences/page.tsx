"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  Paper,
  Grow,
  Fade,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import {
  CodeIcon,
  ServerIcon,
  GlobeIcon,
  CodeXmlIcon,
  DatabaseIcon,
} from "lucide-react";
import "../styles/theme.css";

export default function Preferences() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [showParagraphs, setShowParagraphs] = useState(false);

  useLayoutEffect(() => {
    const timelineTimer = setTimeout(() => setShowTimeline(true), 500);
    const paragraphsTimer = setTimeout(() => setShowParagraphs(true), 1000);

    return () => {
      clearTimeout(timelineTimer);
      clearTimeout(paragraphsTimer);
    };
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
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "var(--color-text-light)",
              mb: 3,
            }}
          >
            Previous Projects
          </Typography>
        </motion.div>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 4 }} />

        <Fade in={showTimeline} timeout={700}>
          <Box>
            <Timeline position="alternate">
              {[
                {
                  icon: <ServerIcon />,
                  title: "Java Development",
                  description:
                    "Started learning Java in school, making standalone programs.",
                },
                {
                  icon: <CodeXmlIcon />,
                  title: "Frontend Frameworks",
                  description: "Explored JavaScript, TypeScript and later React.",
                },
                {
                  icon: <GlobeIcon />,
                  title: "Back and Front End Development",
                  description:
                    "Learned how to piece together a Java back-end to send and receive data from a React front-end.",
                },
                {
                  icon: <DatabaseIcon />,
                  title: "Internship & Bachelor",
                  description: "Internship with Iver Norge AS",
                },
                {
                  icon: <CodeIcon />,
                  title: "This Website",
                  description:
                    "Built as a hobby project with Next.js and Material-UI",
                },
              ].map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">{item.icon}</TimelineDot>
                    {index < 4 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ color: "var(--color-text-light)" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "var(--color-text-light)" }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Fade>

        <Divider
          sx={{ borderColor: "rgba(255,255,255,0.3)", mt: 4, mb: 4 }}
        />

        <Grow in={showParagraphs} timeout={700}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "0px",
            }}
          >
            <Typography
              sx={{ color: "var(--color-text-light)" }}
              variant="body1"
              paragraph
            >
              During my internship at Iver, I had the chance to collaborate with
              three fellow students on our bachelor’s thesis project. We
              embraced Scrum as our agile methodology, which helped us stay
              organized and iterate quickly. For the backend, we utilized Java
              with Spring Boot, while our frontend was built using Vue.js. We
              also got to work with real customer data from Azure, extracting
              the information and storing it in a custom Cosmos DB on Azure.
              From there, we developed a Vue.js interface that allowed users to
              interactively sort, search, and retrieve specific data, making the
              entire experience both educational and highly engaging.
            </Typography>

            <Typography
              sx={{ color: "var(--color-text-light)" }}
              variant="body1"
              paragraph
            >
              Most of my coursework centered around creating backends in Java,
              which has made me highly comfortable and confident in Java-based
              development. On the frontend, I've worked with React, Next.js, and
              Vue.js, giving me a versatile skill set for building complete web
              applications. Additionally, I've gained experience in C# (with
              .NET Framework), Python, and Arduino, and I tend to pick up new
              languages and frameworks rapidly.
            </Typography>

            <Typography
              sx={{ color: "var(--color-text-light)" }}
              variant="body1"
              paragraph
            >
              The page you're viewing right now is a purely web-based
              application built with a Next.js frontend, TypeScript, and
              Material-UI. I developed this site as a hobby project while
              exploring new employment opportunities, and as a way to keep my
              frontend skills fresh. It's been an enjoyable process, and I hope
              reading through it has been equally insightful for you.
            </Typography>
          </Paper>
        </Grow>

        <Divider
          sx={{ borderColor: "rgba(255,255,255,0.3)", mt: 4, mb: 4 }}
        />
      </Container>
    </div>
  );
}
