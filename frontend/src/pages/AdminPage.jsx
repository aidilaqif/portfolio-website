import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Admin Dashboard</h1>
            <p>Content Management System</p>
            <nav>
                <Link to="/" style={{color: '#61dafb', textDecoration: 'underline'}}>
                    Back to Portfolio
                </Link>
            </nav>
        </div>
    );
}

export default AdminPage;