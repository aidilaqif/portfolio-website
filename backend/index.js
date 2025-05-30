const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS configuration for production
app.use(cors({
    origin: [
        'http://localhost:3000', // Local development
        'https://d1wyr15leerczz.cloudfront.net', // Production CloudFront
    ],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({status: "OK"});
});

app.get('/api/public', (req, res) => {
    res.json({message: "Public API Ready"});
});

app.get('/api/admin', (req, res) => {
    res.json({message: "Admin API Ready"});
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});