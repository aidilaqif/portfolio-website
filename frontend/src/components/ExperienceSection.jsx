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
      title: 'System Analyst',
      company: 'Tenaga Nasional Berhad',
      period: 'January 2026 – Present',
      description: 'Development, Enhancement and Testing',
      highlights: [
        'Functional engineer for ERMS MM module.',
        'Analyzed PR–PO–GR and contract procurement workflows.',
        'Performed SIT/UAT for Change Requests and functional enhancements.',
        'Managed CR handover from external vendors.',
        'Validated requirements with business and technical teams.'
      ],
    },
    {
      title: 'Programmer',
      company: 'Zanko Sdn Bhd',
      period: 'October 2025 – December 2025',
      description: 'System Enhancement & Workflow Automation',
      highlights: [
        'Supported development of Johor State digital systems focusing on UI/UX enhancement, workflow automation, and maintenance.',
        'Executed Change Requests (CRs) involving new functionality, approval-flow updates, and CRON-based notifications.',
        'Collaborated with system analysts and senior programmers to refine business logic and ensure module compatibility.',
        'Authored optimized SQL queries for data extraction and validation during CR implementation.',
      ],
    },
    {
      title: 'Intern Programmer',
      company: 'Zanko Sdn Bhd',
      period: 'March 2025 – October 2025',
      description: 'Task Management Ecosystem Development',
      highlights: [
        'Built a task management ecosystem integrating Flutter, CodeIgniter 4, Node.js, and Docker.',
        'Developed real-time communication and task tracking features using Socket.IO.',
        'Contributed to workflow documentation and internal knowledge sharing.',
      ],
    },
    {
      title: 'Freelance Front-End Developer',
      company: 'E-Commerce App',
      period: 'October 2021 – October 2024',
      description: 'International API Integration & UI Development',
      highlights: [
        'Delivered front-end components using Flutter and integrated APIs with an international collaborator.',
        'Maintained consistent milestone delivery across time zones.',
        'Structured a scalable front-end foundation for future optimization.',
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: '#0a0a0a',
        py: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}
          >
            Experience
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 300 }}
          >
            My professional journey
          </Typography>
        </Box>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0', color: 'rgba(255, 255, 255, 0.6)' }}
                variant="body2"
              >
                {exp.period}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                <TimelineDot
                  sx={{
                    bgcolor: '#00e676',
                    boxShadow: '0 0 10px #00e676',
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
                    textAlign: 'left',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ color: 'white', fontWeight: 'bold', mb: 0.5 }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2 }}
                  >
                    {exp.description}
                  </Typography>

                  <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                    {exp.highlights.map((point, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          mb: 0.5,
                          '&::marker': { color: '#00e676' },
                        }}
                      >
                        {point}
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