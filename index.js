const express = require('express');
const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World from Node.js 🚀');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is a simple Node.js app');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});