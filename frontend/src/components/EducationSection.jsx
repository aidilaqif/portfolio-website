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
import { School } from '@mui/icons-material';

function ExperienceSection() {
    const experiences = [
        {
            title: 'Bachelor of Software Engineering',
            company: 'University Putra Malaysia',
            period: 'October 2021 - Present',
            description: 'CGPA: 3.67',
            highlights: [
                "Dean's List award for semester 1, 2, 6 and 7",
                'Best Team Project Awards for Software Engineering Team Project Finale'
            ]
        },
        {
            title: 'Foundation in Computer Science',
            company: 'Kolej Matrikulasi Johor, Tangkak',
            period: 'June 2020 - April 2021',
            description: 'CGPA: 4.00',
            highlights: [
                'First-class Honor Awards',
                'Anugerah Pemacu Dana award recipient'
            ]
        },
        {
            title: 'Sijil Pelajaran Malaysia',
            company: 'Kolej Yayasan Saad Melaka',
            period: 'Jan 2015 - November 2019',
            description: '7A',
            highlights: [
                'College Committee Session 18/19',
                'Vice President Silat Club 2019',
                'Anugerah Remaja Perdana Silver Award'
            ]
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
                        Education
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 300
                        }}
                    >
                        My education journey
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
                                        bgcolor: '#42a5f5',
                                        boxShadow: `0 0 20px '#42a5f5'60`
                                    }}
                                >
                                    <School />
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
                                                        color: '#42a5f5'
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