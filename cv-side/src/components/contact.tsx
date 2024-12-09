import Link from 'next/link';
import { Button } from '@mui/material';
import { Mail, Download } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Link href="mailto:Tenico05@gmail.com" passHref legacyBehavior>
        <a>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text-light)',
              '&:hover': {
                backgroundColor: 'var(--color-primary)',
                opacity: 0.9,
              },
            }}
            startIcon={<Mail />}
          >
            Email Me
          </Button>
        </a>
      </Link>

      <Link href="/nicolai-resume.pdf" passHref legacyBehavior>
        <a download>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text-light)',
              '&:hover': {
                backgroundColor: 'var(--color-primary)',
                opacity: 0.9,
              },
            }}
            startIcon={<Download />}
          >
            Download Resume
          </Button>
        </a>
      </Link>
    </div>
  );
}
