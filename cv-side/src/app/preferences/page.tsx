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
            Bachelor work and iver
          </Typography>
          
          <Typography variant="body1" paragraph>
            java classes
          </Typography>
          
          <Typography variant="body1" paragraph>
            cv website nextjs
          </Typography>
          
          <Typography variant="body1">
            more?
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', mt: 4 }} />

        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', color: 'var(--color-text-light)', mt: 2 }}>
          Thank you for taking the time to learn more about me.
        </Typography>
      </Container>
    </div>
    )
}