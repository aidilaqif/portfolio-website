const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({status: "OK"});
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});