import React from 'react';
import { Link } from 'react-router-dom';

function PublicPage()  {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Public Portfolio Site</h1>
            <p>Welcome to Aidil 'Aqif's Portfolio</p>
            <nav>
                <Link to="/admin" style={{color: '#61dafb', textDecoration: 'underline'}}>
                    Go to Admin Dashboard
                </Link>
            </nav>
        </div>
    );
}

export default PublicPage;