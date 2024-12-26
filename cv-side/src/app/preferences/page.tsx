import { Container, Box, Typography, Divider } from '@mui/material';
import '../styles/theme.css';

export default function Prefrences() {
    return(
        <div className="animated-background" style={{ minHeight: '100vh', padding: '2rem 0', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: 'var(--color-text-light)', mb: 3 }}>
          Previous Projects & Prefrences
        </Typography>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mb: 4 }} />

        <Box sx={{ color: 'var(--color-text-light)', lineHeight: 1.7, fontSize: '1rem' }}>
          <Typography variant="body1" paragraph>
            During my internship at Iver, I had the chance to collaborate with three fellow students on our bachelor’s thesis project. 
            We embraced Scrum as our agile methodology, which helped us stay organized and iterate quickly. 
            For the backend, we utilized Java with Spring Boot, while our frontend was built using Vue.js. 
            We also got to work with real customer data from Azure, extracting the information and storing 
            it in a custom Cosmos DB on Azure. From there, we developed a Vue.js interface that allowed users 
            to interactively sort, search, and retrieve specific data, making the entire experience both educational 
            and highly engaging.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Most of my coursework centered around creating backends in Java, which has made me highly comfortable 
            and confident in Java-based development. On the frontend, I’ve worked with React, Next.js, and Vue.js, 
            giving me a versatile skill set for building complete web applications. Additionally, I’ve gained experience 
            in C# (with .NET Framework), Python, and Arduino, and I tend to pick up new languages and frameworks rapidly.
          </Typography>
          
          <Typography variant="body1" paragraph>
            The page you’re viewing right now is a purely web-based application built with a Next.js frontend, 
            TypeScript, and Material-UI. I developed this site as a hobby project while exploring new employment 
            opportunities, and as a way to keep my frontend skills fresh. It’s been an enjoyable process, and I 
            hope reading through it has been equally insightful for you.
          </Typography>
          
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mt: 4 }} />

      </Container>
    </div>
    )
}