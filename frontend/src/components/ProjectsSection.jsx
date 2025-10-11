import React from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Button,
    Chip,
    Stack,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

function ProjectsSection() {
    const projects = [
        {
            id: 0,
            title: "Johor State Digital Systems (ePNJ & JohorPay)",
            description:
                "Contributed to the Johor State Government’s procurement and payment systems. Delivered Change Requests (CRs) involving workflow automation, CRON-based notifications, and API debugging to improve approval traceability and system stability. Collaborated with system analysts and senior developers to ensure cross-module compatibility and optimized SQL data extraction.",
            technologies: ["CodeIgniter 4", "MySQL", "Docker", "GitLab"],
            image: "/images/epnj-preview.png", // placeholder or any generic preview image
            githubUrl: "https://epnj.johor.gov.my", // link to official site
            buttonLabel: "Official Portal",
        },
        {
            id: 1,
            title: "Task Tracker",
            description:
                "Developed a multi-platform task management ecosystem with real-time synchronization, role-based access, and Dockerized backend. Enhanced transparency and coordination efficiency.",
            technologies: [
                "Flutter",
                "CodeIgniter 4",
                "Node.js",
                "Socket.io",
                "MySQL",
                "REST API",
                "WebSockets",
                "Docker",
            ],
            image: "/images/tt-preview.png",
            githubUrl: "https://github.com/aidilaqif/task_tracker",
            buttonLabel: "GitHub",
        },
        {
        id: 2,
        title: "CPS-X Dragonfly 4.0",
        description:
            "Built a warehouse management system integrating drone-based inventory tracking and AI analytics. Designed PostgreSQL schema and optimized data logging for high-volume operations.",
        technologies: [
            "React",
            "Flutter",
            "Node.js",
            "PostgreSQL",
            "OpenAI",
            "Express.js",
            "REST API",
            "QR Integration",
        ],
        image: "/images/cps-preview.png",
        githubUrl: "https://github.com/aidilaqif/CPS-X-4.0_Frontend",
        buttonLabel: "GitHub",
        },
        {
        id: 3,
        title: "Campaign Report Manager",
        description:
            "Developed a social-pulse analytics platform with centralized reporting and automated PDF generation for marketing performance visualization.",
        technologies: ["Vue.js", "Vuetify", "AWS Lambda", "DynamoDB", "Chart.js"],
        image: "/images/crm-preview.png",
        githubUrl: "https://github.com/aidilaqif/campaign-report-manager",
        buttonLabel: "GitHub",
        },
    ];

    return (
        <Box
        sx={{
            background: "#0a0a0a",
            minHeight: "100vh",
            py: 8,
            position: "relative",
            "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            },
        }}
        >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
            <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "white", mb: 2 }}
            >
                Projects
            </Typography>
            <Typography
                variant="h5"
                sx={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 300 }}
            >
                Selected projects demonstrating system architecture, workflow
                automation, and cross-platform integration.
            </Typography>
            </Box>

            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {projects.map((project) => (
                <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={project.id}
                sx={{ display: "flex", justifyContent: "center" }}
                >
                <Paper
                    elevation={0}
                    sx={{
                    width: "100%",
                    maxWidth: "400px",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    border: `2px solid transparent`,
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                    }}
                >
                    {/* Project Preview */}
                    <Box
                    sx={{
                        width: "100%",
                        height: 200,
                        bgcolor: "#f5f5f5",
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                    }}
                    />

                    <Box sx={{ p: 4 }}>
                    <Typography
                        variant="h5"
                        sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color: "rgba(255, 255, 255, 0.9)",
                        }}
                    >
                        {project.title}
                    </Typography>

                    {project.description && (
                        <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            mb: 2,
                            minHeight: "90px",
                        }}
                        >
                        {project.description}
                        </Typography>
                    )}

                    <Box sx={{ mb: 3 }}>
                        <Stack
                        direction="row"
                        spacing={1}
                        sx={{ flexWrap: "wrap", gap: 1 }}
                        >
                        {project.technologies.map((tech, index) => (
                            <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                                bgcolor: "rgba(0,0,0,0.08)",
                                color: "rgba(255, 255, 255, 0.9)",
                                fontSize: "0.75rem",
                                height: 28,
                                "&:hover": { bgcolor: "rgba(0,0,0,0.12)" },
                            }}
                            />
                        ))}
                        </Stack>
                    </Box>

                    <Button
                        variant="contained"
                        startIcon={
                        project.buttonLabel === "Official Portal" ? null : (
                            <GitHub />
                        )
                        }
                        href={project.githubUrl}
                        target="_blank"
                        sx={{
                        bgcolor: "rgba(255,255,255,0.2)",
                        color: "white",
                        textTransform: "none",
                        borderRadius: 2,
                        px: 3,
                        py: 1,
                        "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                        }}
                    >
                        {project.buttonLabel || "GitHub"}
                    </Button>
                    </Box>
                </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
        </Box>
    );
}

export default ProjectsSection;
