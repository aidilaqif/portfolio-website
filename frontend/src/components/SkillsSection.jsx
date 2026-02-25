import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { 
    SiFlutter, 
    SiReact, 
    SiVuedotjs, 
    SiCodeigniter, 
    SiNodedotjs, 
    SiMysql, 
    SiPostgresql, 
    SiDocker, 
    SiGitlab, 
    SiGit, 
    SiAmazons3,
    SiPython,
    SiSap,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

function SkillsSection() {
    const skills = [
        // === Frontend Development ===
        { name: 'Flutter', category: 'Frontend', icon: SiFlutter, color: '#02569B' },
        { name: 'React', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
        { name: 'Vue.js', category: 'Frontend', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'CodeIgniter 4', category: 'Frontend', icon: SiCodeigniter, color: '#EF4223' },

        // === Backend Development ===
        { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
        { name: 'REST API', category: 'Backend', icon: FaServer, color: '#FF6B35' },
        { name: 'Python', category: 'Backend', icon: SiPython, color: '#3776AB' },
        { name: 'SAP', category: 'Backend', icon: SiSap, color: '#3776AB' },

        // === Database Management ===
        { name: 'MySQL', category: 'Database', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#336791' },

        // === DevOps & Tools ===
        { name: 'Docker', category: 'DevOps & Tools', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', category: 'DevOps & Tools', icon: SiGit, color: '#F05032' },
        { name: 'GitLab', category: 'DevOps & Tools', icon: SiGitlab, color: '#FC6D26' },
        { name: 'AWS S3', category: 'DevOps & Tools', icon: SiAmazons3, color: '#FF9900' },

        // === Soft Skills ===
        { name: 'Analytical Thinking', category: 'Soft Skills', icon: FaServer, color: '#00e676' },
        { name: 'Workflow Optimization', category: 'Soft Skills', icon: FaServer, color: '#ffa726' },
        { name: 'Collaboration', category: 'Soft Skills', icon: FaServer, color: '#42a5f5' },
    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Frontend': return '#00e676';
            case 'Backend': return '#ffa726';
            case 'Database': return '#42a5f5';
            case 'DevOps & Tools': return '#ab47bc';
            case 'Soft Skills': return '#29b6f6';
            default: return '#ffffff';
        }
    };

    return (
        <Box
            sx={{
                background: '#0a0a0a',
                color: 'white',
                py: 8,
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography 
                        variant="h3" 
                        component="h2" 
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                    >
                        Technical Skills
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ opacity: 0.8, maxWidth: '600px', mx: 'auto' }}
                    >
                        Technologies, tools, and capabilities I apply in development and deployment.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 3,
                        pb: 2,
                        px: 2,
                        '&::-webkit-scrollbar': { height: 8 },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 4,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(250, 255, 255, 0.3)',
                            borderRadius: 4,
                            '&:hover': { background: 'rgba(255, 255, 255, 0.5)' },
                        },
                    }}
                >
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <Paper
                                key={index}
                                elevation={0}
                                sx={{
                                    minWidth: 140,
                                    height: 140,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                                    border: `2px solid transparent`,
                                    borderRadius: 3,
                                    backdropFilter: 'blur(10px)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        border: `2px solid ${getCategoryColor(skill.category)}`,
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px ${getCategoryColor(skill.category)}40`,
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 3,
                                        background: getCategoryColor(skill.category),
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    },
                                    '&:hover::before': { opacity: 1 },
                                }}
                            >
                                <IconComponent 
                                    size={40}
                                    style={{ 
                                        color: skill.color,
                                        marginBottom: '8px',
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                    }}
                                />
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '0.85rem'
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                            </Paper>
                        );
                    })}
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: 3, 
                        mt: 4,
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { name: 'Frontend', color: '#00e676' },
                        { name: 'Backend', color: '#ffa726' },
                        { name: 'Database', color: '#42a5f5' },
                        { name: 'DevOps & Tools', color: '#ab47bc' },
                        { name: 'Soft Skills', color: '#29b6f6' }
                    ].map((category, index) => (
                        <Box 
                            key={index}
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 1,
                                opacity: 0.8
                            }}
                        >
                            <Box 
                                sx={{ 
                                    width: 12, 
                                    height: 12, 
                                    bgcolor: category.color,
                                    borderRadius: '50%'
                                }} 
                            />
                            <Typography variant="body2">
                                {category.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default SkillsSection;
