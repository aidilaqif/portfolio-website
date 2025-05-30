import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Paper, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import config from "../config";

function PublicPage() {
    const [apiStatus, setApiStatus] = useState("Testing...");
    const [publicAPI, setPublicAPI] = useState("Testing...");

    useEffect(() => {
        testAPIs();
    }, []);

    const testAPIs = async () => {
        try {
            // Test health endpoint
            const healthResponse = await fetch(`${config.API_BASE_URL.replace('/api', '')}/health`);
            const healthData = await healthResponse.json();
            setApiStatus(healthData.status || 'Error');

            // Test public API endpoint
            const publicResponse = await fetch(`${config.API_BASE_URL}/public`);
            const publicData = await publicResponse.json();
            setPublicAPI(publicData.message || 'Error');
        } catch (error) {
            console.error('API Test Error:', error);
            setApiStatus('Connection Failed');
            setPublicAPI('Connection Failed');
        }
    };
    return (
        <Box>
            <HeroSection />
            {/* Temporary API Status Section */}
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        API Connection Test
                    </Typography>
                    <Typography><strong>Backend Health:</strong> {apiStatus}</Typography>
                    <Typography><strong>Public API:</strong> {publicAPI}</Typography>
                    {/* <Typography><strong>API URL:</strong> {config.API_BASE_URL}</Typography> */}
                    <Box mt={2}>
                        <Link to="/admin" style={{ color: "#1976d2", textDecoration: "underline" }}>
                            Go to Admin Dashboard
                        </Link>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default PublicPage;
