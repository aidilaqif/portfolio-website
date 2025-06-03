import React from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Grid,
    Paper,
    Button,
    Stack
} from '@mui/material';
import { 
    Email, 
    Phone, 
    LinkedIn, 
    GitHub,
    LocationOn
} from '@mui/icons-material';

function ContactSection() {
    const contactInfo = [
        {
            icon: Email,
            label: 'Email',
            value: 'aidil.aqif@gmail.com',
            link: 'mailto:aidil.aqif@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+60 13-758 7307',
            link: 'tel:+60137587307'
        },
        {
            icon: LocationOn,
            label: 'Location',
            value: 'Johor, Malaysia',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: LinkedIn,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/aidilaqif',
            color: '#0077B5'
        },
        {
            icon: GitHub,
            label: 'GitHub',
            url: 'https://github.com/aidilaqif',
            color: '#333'
        }
    ];

    return (
        <Box
            sx={{
                background: '#0a0a0a',
                py: 8,
                position: 'relative'
            }}
        >
            <Container maxWidth="md">
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography 
                        variant="h2" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                            fontWeight: 'bold', 
                            color: 'white',
                            mb: 2
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 300
                        }}
                    >
                        Let's work together
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {contactInfo.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 2,
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        cursor: item.link ? 'pointer' : 'default',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.08)',
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                        }
                                    }}
                                    onClick={() => item.link && window.open(item.link, '_blank')}
                                >
                                    <IconComponent 
                                        sx={{ 
                                            fontSize: 40,
                                            color: '#42a5f5',
                                            mb: 2
                                        }} 
                                    />
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: 'white',
                                            mb: 1
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.7)'
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>

                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            color: 'white',
                            mb: 3
                        }}
                    >
                        Connect with me
                    </Typography>
                    <Stack 
                        direction="row" 
                        spacing={2} 
                        justifyContent="center"
                    >
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <Button
                                    key={index}
                                    variant="contained"
                                    startIcon={<IconComponent />}
                                    href={social.url}
                                    target="_blank"
                                    sx={{ 
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        color: 'white',
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        '&:hover': { 
                                            bgcolor: social.color,
                                            transform: 'translateY(-2px)',
                                            boxShadow: `0 10px 20px ${social.color}40`
                                        }
                                    }}
                                >
                                    {social.label}
                                </Button>
                            );
                        })}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactSection;