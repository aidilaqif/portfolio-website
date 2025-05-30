import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Public Portfolio Site</h1>
            <p>Welcome to Aidil 'Aqif's Portfolio</p>
            {/* API Status Section */}
            <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <h3>API Connection Test</h3>
                <p><strong>Backend Health:</strong>{apiStatus}</p>
                <p><strong>Public API:</strong>{publicAPI}</p>
                <p><strong>API URL:</strong>{config.API_BASE_URL}</p>
            </div>
            <nav>
                <Link to="/admin" style={{ color: "#61dafb", textDecoration: "underline" }}>
                Go to Admin Dashboard
                </Link>
            </nav>
        </div>
    );
}

export default PublicPage;
