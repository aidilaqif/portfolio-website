import React from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Paper,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { Work } from '@mui/icons-material';

function ExperienceSection() {
    const experiences = [
        {
            title: 'Intern Programmer',
            company: 'Zanko Sdn Bhd',
            period: 'March 2025 - Present',
            description: 'Full-Stack Development and Technology Integration',
            highlights: [
                'Self-directed development of task management system using Flutter, CodeIgniter 4, Node.js and Docker',
                'Implemented web and mobile applications with real-time communication features',
                'Proactively engaged with company staff for continuous improvements'
            ]
        },
        {
            title: 'Intern Front-End Developer',
            company: 'E-Commerce App',
            period: 'October 2021 - October 2024',
            description: 'Self-Taught Development and Milestone Management',
            highlights: [
                'Self-taught front-end development using Flutter',
                'Collaborated with international programmer on API integration',
                'Established foundation of front-end architecture'
            ]
        },
    ];

    return (
        <Box
            sx={{
                background: '#0a0a0a',
                py: 8,
                position: 'relative'
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" sx={{ mb: 8 }}>
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
                        Experience
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 300
                        }}
                    >
                        My professional journey
                    </Typography>
                </Box>

                <Timeline position="alternate">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ 
                                    m: 'auto 0',
                                    color: 'rgba(255, 255, 255, 0.6)'
                                }}
                                variant="body2"
                            >
                                {exp.period}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                                <TimelineDot 
                                    sx={{ 
                                        bgcolor: '#00e676',
                                        boxShadow: `0 0 20px '#00e676' 60`
                                    }}
                                >
                                    <Work />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 2,
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.08)',
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                        }
                                    }}
                                >
                                    <Typography 
                                        variant="h6" 
                                        component="h3"
                                        sx={{ 
                                            color: 'white',
                                            fontWeight: 'bold',
                                            mb: 0.5
                                        }}
                                    >
                                        {exp.title}
                                    </Typography>
                                    <Typography 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            mb: 1
                                        }}
                                    >
                                        {exp.company}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            mb: 2
                                        }}
                                    >
                                        {exp.description}
                                    </Typography>
                                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                                        {exp.highlights.map((highlight, idx) => (
                                            <Typography
                                                key={idx}
                                                component="li"
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    mb: 0.5,
                                                    '&::marker': {
                                                        color: '#00e676'
                                                    }
                                                }}
                                            >
                                                {highlight}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}

export default ExperienceSection;