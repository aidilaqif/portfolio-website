const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
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