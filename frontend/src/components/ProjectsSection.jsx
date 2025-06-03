import React from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Grid, 
    Paper, 
    Button,
    Chip,
    Stack,
} from '@mui/material';
import { 
    GitHub
} from '@mui/icons-material';

function ProjectsSection() {

    const projects = [
        {
            id: 1,
            title: "Task Tracker",
            technologies: ["Flutter", "CodeIgniter 4", "Node.js", "Socket.io", "MySQL", "REST API", "WebSockets", "Docker"],
            image: "/images/tt-preview.png",
            githubUrl: "https://github.com/aidilaqif/task_tracker"
        },
        {
            id: 2,
            title: "CPS-X Dragonfly 4.0",
            technologies: ["React", "Flutter", "Node.js", "PostgreSQL", "OpenAI", "Express.js", "REST API", "QR Integration"],
            image: "/images/cps-preview.png",
            githubUrl: "https://github.com/aidilaqif/CPS-X-4.0_Frontend"
        },
        {
            id: 3,
            title: "Campaign Report Manager",
            technologies: ["Vue.js", "Vuetify", "AWS Lambda", "DynamoDB", "Chart.js"],
            image: "/images/crm-preview.png",
            githubUrl: "https://github.com/aidilaqif/campaign-report-manager"
        }
    ];

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                minHeight: '100vh',
                py: 8,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(120, 120, 120, 0.1) 0%, transparent 50%)
                    `,
                    pointerEvents: 'none'
                }
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
                        Projects
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 300
                        }}
                    >
                        Some of the things I've built.
                    </Typography>
                </Box>

                <Grid 
                    container 
                    spacing={3}
                    sx={{ justifyContent: 'center' }}
                >
                    {projects.map((project) => {
                        return (
                            <Grid 
                                item 
                                xs={12} 
                                sm={6}
                                lg={4}
                                key={project.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        width: '100%',
                                        maxWidth: '400px',
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        border: `2px solid transparent`,
                                        borderRadius: 3,
                                        backdropFilter: 'blur(10px)',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        }
                                    }}
                                >
                                    {/* Project Preview Image */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 200,
                                            bgcolor: '#f5f5f5',
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 100%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease'
                                            },
                                            '&:hover::before': {
                                                opacity: 1
                                            }
                                        }}
                                    >
                                        {/* Fallback when no image */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                color: '#999',
                                                display: project.image ? 'none' : 'block'
                                            }}
                                        >
                                        </Box>
                                    </Box>

                                    <Box sx={{ p: 4 }}>
                                        {/* Project Title */}
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                fontWeight: 'bold',
                                                mb: 2,
                                                color: 'rgba(255, 255, 255, 0.9)'
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        {/* Technology Stack */}
                                        <Box sx={{ mb: 4 }}>
                                            <Stack 
                                                direction="row" 
                                                spacing={1}
                                                sx={{ 
                                                    flexWrap: 'wrap',
                                                    gap: 1
                                                }}
                                            >
                                                {project.technologies.map((tech, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'rgba(0,0,0,0.08)',
                                                            color: 'rgba(255, 255, 255, 0.9)',
                                                            fontSize: '0.75rem',
                                                            height: 28,
                                                            '&:hover': {
                                                                bgcolor: 'rgba(0,0,0,0.12)'
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </Stack>
                                        </Box>

                                        {/* Action Button */}
                                        <Button
                                            variant="contained"
                                            startIcon={<GitHub />}
                                            href={project.githubUrl}
                                            target="_blank"
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.2)',
                                                color: 'white',
                                                textTransform: 'none',
                                                borderRadius: 2,
                                                px: 3,
                                                py: 1,
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.3)'
                                                }
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default ProjectsSection;