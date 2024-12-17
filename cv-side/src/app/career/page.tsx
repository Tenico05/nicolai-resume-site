"use client";

import '../styles/theme.css';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { Book, Briefcase, ShoppingBag } from 'lucide-react';

export default function Career() {
  return (
    <div className="animated-background" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <Container maxWidth="md" sx={{ color: 'var(--color-text-light)' }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 4, color: 'var(--color-text-light)' }}>
          Employment & Education
        </Typography>

        {/* Education */}
        <Paper 
          elevation={3} 
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(6px)', 
            p: 3, 
            mb: 4, 
            borderRadius: 0,
            color: 'var(--color-text-light)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 2 }}>
            <div 
              className="floating bg-[var(--color-primary)] p-2 rounded hover:opacity-90 transition-colors duration-200" 
              style={{ animationDelay: '0s' }}
            >
              <Book className="w-8 h-8 text-[var(--color-text-light)]" />
            </div>
            <Typography variant="h5" sx={{ fontWeight: 'medium', color: 'var(--color-text-light)' }}>
              IT-Programming Bachelor, Høyskolen Kristiania
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8, mb: 2, color: 'var(--color-text-light)' }}>
            August 2021 — June 2024
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'var(--color-text-light)' }}>
            Earned a bachelor’s degree in programming, building a solid foundation in modern software development and problem-solving.
          </Typography>
        </Paper>

        {/* CEWE Japan Photo */}
        <Paper 
          elevation={3} 
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(6px)', 
            p: 3, 
            mb: 4, 
            borderRadius: 0,
            color: 'var(--color-text-light)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 2 }}>
            <div 
              className="floating bg-[var(--color-primary)] p-2 rounded hover:opacity-90 transition-colors duration-200" 
              style={{ animationDelay: '0.75s' }}
            >
              <ShoppingBag className="w-8 h-8 text-[var(--color-text-light)]" />
            </div>
            <Typography variant="h5" sx={{ fontWeight: 'medium', color: 'var(--color-text-light)' }}>
              CEWE Japan Photo, Oslo
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8, mb: 2, color: 'var(--color-text-light)' }}>
            October 2022 — Present
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'var(--color-text-light)' }}>
            Providing customer service, product guidance, and photography advice. 
            Helping customers navigate printing solutions and ensuring a smooth, pleasant experience.
          </Typography>
        </Paper>

        {/* Iver Norge AS */}
        <Paper 
          elevation={3} 
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(6px)', 
            p: 3, 
            mb: 4, 
            borderRadius: 0,
            color: 'var(--color-text-light)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 2 }}>
            <div 
              className="floating bg-[var(--color-primary)] p-2 rounded hover:opacity-90 transition-colors duration-200" 
              style={{ animationDelay: '1.5s' }}
            >
              <Briefcase className="w-8 h-8 text-[var(--color-text-light)]" />
            </div>
            <Typography variant="h5" sx={{ fontWeight: 'medium', color: 'var(--color-text-light)' }}>
              Iver Norge AS, Oslo
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.8, mb: 2, color: 'var(--color-text-light)' }}>
            January 2024 — June 2024
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1, color: 'var(--color-text-light)' }}>
            Worked on developing a CMDB for managing Azure client data using a Spring Boot backend, Vue.js frontend, and a NoSQL Azure Cosmos database.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'var(--color-text-light)' }}>
            Embraced agile methodologies, participated in scrum ceremonies, and earned a Scrum Master certification. 
            Developed both backend services for data processing and a frontend interface for visualizing the client data.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
