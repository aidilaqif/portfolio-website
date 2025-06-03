import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { 
    SiFlutter, 
    SiReact, 
    SiNodedotjs, 
    SiVuedotjs, 
    SiMysql, 
    SiPostgresql, 
    SiPython, 
    SiDocker, 
    SiAmazondynamodb, 
    SiCplusplus,
    SiGit,
    SiCodeigniter
} from 'react-icons/si';
import { FaServer, FaJava, FaAmazon } from 'react-icons/fa';

function SkillsSection() {
    const skills = [
        // Advanced Skills
        { name: 'Flutter', category: 'advanced', icon: SiFlutter, color: '#02569B' },
        { name: 'React', category: 'advanced', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', category: 'advanced', icon: SiNodedotjs, color: '#339933' },
        { name: 'Vue.js', category: 'advanced', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'CodeIgniter 4', category: 'advanced', icon: SiCodeigniter, color: '#EF4223' },
        { name: 'Git', category: 'advanced', icon: SiGit, color: '#F05032' },
        
        // Moderate Skills
        { name: 'MySQL', category: 'moderate', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', category: 'moderate', icon: SiPostgresql, color: '#336791' },
        { name: 'Python', category: 'moderate', icon: SiPython, color: '#3776AB' },
        { name: 'Java', category: 'moderate', icon: FaJava, color: '#007396' },
        { name: 'Docker', category: 'moderate', icon: SiDocker, color: '#2496ED' },
        { name: 'REST API', category: 'moderate', icon: FaServer, color: '#FF6B35' },
        
        // Beginner Skills
        { name: 'AWS', category: 'beginner', icon: FaAmazon, color: '#FF9900' },
        { name: 'DynamoDB', category: 'beginner', icon: SiAmazondynamodb, color: '#3F48CC' },
        { name: 'C++', category: 'beginner', icon: SiCplusplus, color: '#00599C' },
    ];

    const getCategoryColor = (category) => {
        switch(category) {
            case 'advanced': return '#00e676';
            case 'moderate': return '#ffa726';
            case 'beginner': return '#42a5f5';
            default: return '#ffffff';
        }
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                color: 'white',
                py: 8
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
                        Technologies and tools I work with
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 3,
                        pb: 2,
                        px: 2,
                        '&::-webkit-scrollbar': {
                            height: 8,
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 4,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(250, 255, 255, 0.3)',
                            borderRadius: 4,
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.5)',
                            },
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
                                        transform: 'translateY(-8px)',
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
                                    '&:hover::before': {
                                        opacity: 1,
                                    }
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
                        gap: 4, 
                        mt: 4,
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { name: 'Advanced', color: '#00e676' },
                        { name: 'Moderate', color: '#ffa726' },
                        { name: 'Beginner', color: '#42a5f5' }
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