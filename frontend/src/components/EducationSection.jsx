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

function EducationSection() {
  const education = [
    {
      title: 'Bachelor of Software Engineering (Hons)',
      institution: 'University Putra Malaysia',
      period: 'October 2021 – September 2025',
      description: 'CGPA: 3.70',
      highlights: [
        "Dean’s List Award – Semesters 1, 2, 6, 7 & 8",
        "Best Team Project Award – Software Engineering Team Project Finale",
        "Anugerah Pemacu Dana Recipient"
      ]
    },
    {
      title: 'Foundation in Computer Science',
      institution: 'Kolej Matrikulasi Johor, Tangkak',
      period: 'June 2020 – April 2021',
      description: 'CGPA: 4.00',
      highlights: [
        'First-Class Honour Award'
      ]
    },
    {
      title: 'Sijil Pelajaran Malaysia (SPM)',
      institution: 'Kolej Yayasan Saad, Melaka',
      period: 'January 2015 – November 2019',
      description: '7A',
      highlights: [
        'College Committee Session 2018/2019',
        'Vice President, Silat Club (2019)',
        'Anugerah Remaja Perdana – Silver Award'
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
          {education.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ 
                  m: 'auto 0',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
                variant="body2"
              >
                {edu.period}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                <TimelineDot 
                  sx={{ 
                    bgcolor: '#42a5f5',
                    boxShadow: '0 0 10px #42a5f5'
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
                    {edu.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 1
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                      mb: 2
                    }}
                  >
                    {edu.description}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                    {edu.highlights.map((highlight, idx) => (
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

export default EducationSection;
