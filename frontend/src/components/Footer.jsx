import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        background: '#0a0a0a',
        py: 3,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            textAlign: 'center',
          }}
        >
          © {currentYear} Aidil 'Aqif Mohd Pidaus. Powered by React & Material-UI.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
