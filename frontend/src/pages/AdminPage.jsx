import React, { useState, useEffect } from 'react';
import config from '../config';
import { Link } from 'react-router-dom';

function AdminPage() {
    const [adminAPI, setAdminAPI] = useState('Testing...');

    useEffect(() => {
        testAdminAPI();
    }, []);

    const testAdminAPI = async () => {
        try {
            const response = await fetch(`${config.API_BASE_URL}/admin`);
            const data = await response.json();
            setAdminAPI(data.message || 'Error');
        } catch (error) {
            console.error('Admin API Test Error:', error);
            setAdminAPI('Connection Failed');
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Admin Dashboard</h1>
            <p>Content Management System</p>
            {/* API Status Section */}
            <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <h3>Admin API Test</h3>
                <p><strong>Admin API:</strong> {adminAPI}</p>
                {/* <p><strong>API URL:</strong> {config.API_BASE_URL}</p> */}
            </div>

            <nav>
                <Link to="/" style={{color: '#61dafb', textDecoration: 'underline'}}>
                    Back to Portfolio
                </Link>
            </nav>
        </div>
    );
}

export default AdminPage;