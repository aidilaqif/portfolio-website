import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { LinkedIn, GitHub, Email, Phone } from '@mui/icons-material';

function HeroSection() {
    return (
        <Box
            sx={{
                background: '#0a0a0a',
                color: 'white',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                py: 8
            }}
        >
            <Container maxWidth="md">
                <Box textAlign="center">
                    <Typography 
                        variant="h2" 
                        component="h1" 
                        gutterBottom
                        sx={{ fontWeight: 'bold', mb: 2 }}
                    >
                        Aidil 'Aqif Mohd Pidaus
                    </Typography>

                    <Typography 
                        variant="h4" 
                        component="h2" 
                        gutterBottom
                        sx={{ fontWeight: 300, mb: 3 }}
                    >
                        Junior Software Engineer
                    </Typography>

                    <Typography 
                        variant="h6" 
                        sx={{ mb: 4, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
                    >
                        Results-driven software engineer with expertise in full-stack development. 
                        Proficient in Flutter, React, Node.js, and modern web technologies.
                    </Typography>

                    <Stack 
                        direction="row" 
                        spacing={2} 
                        justifyContent="center"
                        sx={{ mb: 4 }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<LinkedIn />}
                            href="https://linkedin.com/in/aidilaqif"
                            target="_blank"
                            sx={{ 
                                bgcolor: 'rgba(255,255,255,0.2)', 
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                            }}
                        >
                            LinkedIn
                        </Button>
                        
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<GitHub />}
                            href="https://github.com/aidilaqif"
                            target="_blank"
                            sx={{ 
                                bgcolor: 'rgba(255,255,255,0.2)', 
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                            }}
                        >
                            GitHub
                        </Button>
                    </Stack>

                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={3} 
                        justifyContent="center"
                        sx={{ opacity: 0.9 }}
                    >
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Email sx={{ mr: 1 }} />
                            <Typography>aidil.aqif@gmail.com</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Phone sx={{ mr: 1 }} />
                            <Typography>+6013-7587307</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;