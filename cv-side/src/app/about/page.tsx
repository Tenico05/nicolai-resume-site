"use client";

import '../styles/theme.css';
import { Container, Box, Typography, Divider } from '@mui/material';

export default function About() {
  return (
    <div className="animated-background" style={{ minHeight: '100vh', padding: '2rem 0', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: 'var(--color-text-light)', mb: 3 }}>
          About Me
        </Typography>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 4 }} />

        <Box sx={{ color: 'var(--color-text-light)', lineHeight: 1.7, fontSize: '1rem' }}>
          <Typography variant="body1" paragraph>
            Hello, I’m Nicolai Medbø, a 22-year-old based in Oslo who has nurtured a passion for technology since childhood. 
            My journey began around the age of twelve, experimenting with a Minecraft mod called ComputerCraft. Over time, I explored Scratch programming 
            and gradually moved on to basic web development with HTML and CSS. This early curiosity eventually guided me toward higher education.
          </Typography>
          
          <Typography variant="body1" paragraph>
            After completing high school, I enrolled at Kristiania University College to pursue a Bachelor’s degree in Programming. 
            By June 2024, I had built a strong foundation in software development practices and a solid understanding of contemporary 
            tech stacks. With each new project, I discovered more about my capabilities and interests, reinforcing my dedication 
            to crafting clean, efficient, and purposeful code.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Outside of my technocoligal interests I love being active. For the past four years, I’ve been regularly visiting the gym, 
            and I take great pleasure in hiking and reaching new mountaintops. I’m also an avid gamer, always up for trying 
            something new. Recently, I’ve developed a fondness for golf—a pursuit that challenges both my focus and patience. 
            Still, one of my deepest passions is photography, both digital and analogue. Capturing a moment in time, experimenting 
            with composition, and exploring the interplay of light and shadow bring me a sense of creative fulfillment 
            that complements my technical side.
          </Typography>
          
          <Typography variant="body1">
            Above all, I appreciate being around people. I consider myself socially adaptable and enjoy meeting new faces, 
            whether it’s on a development team following agile principles or a group of fellow golfers on a weekend outing. 
            Balancing approachability with professionalism, I aim to contribute positively to any environment I join. 
            In essence, I’m eager to apply my technical skills, personal interests, and social versatility to create, learn, 
            and connect—both professionally and personally.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mt: 4 }} />

        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', color: 'var(--color-text-light)', mt: 2 }}>
          Thank you for taking the time to learn more about me.
        </Typography>
      </Container>
    </div>
  );
}
