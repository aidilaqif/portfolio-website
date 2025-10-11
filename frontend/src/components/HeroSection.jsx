import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Stack
} from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import ProfilePhoto from './ProfilePhoto';

function HeroSection() {
  return (
    <Box
      sx={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >
          {/* === Left: Profile Photo === */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ProfilePhoto size={220} />
          </Grid>

          {/* === Right: Intro Text + Buttons === */}
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 1,
                }}
              >
                Aidil 'Aqif Mohd Pidaus
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  mb: 3,
                }}
              >
                Software Engineer
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: 600,
                  mb: 5,
                  lineHeight: 1.6,
                }}
              >
                Results-oriented Software Engineer experienced in full-stack development,
                system enhancement, and workflow automation. Proficient in Flutter,
                CodeIgniter 4, React, and MySQL with a collaborative and analytical
                approach to delivering scalable solutions.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  variant="contained"
                  startIcon={<LinkedIn />}
                  href="https://linkedin.com/in/aidilaqif"
                  target="_blank"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                    },
                  }}
                >
                  LinkedIn
                </Button>

                <Button
                  variant="contained"
                  startIcon={<GitHub />}
                  href="https://github.com/aidilaqif"
                  target="_blank"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                    },
                  }}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
