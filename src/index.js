const serverless = require('serverless-http');
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
    DEBUG: process.env.DEBUG === 1 || `${process.env.DEBUG}` === '1',
    DATABASE_URL: process.env.DATABASE_URL,
  });
});

app.get('/path', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from path!',
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

// server-full
// app.listen(PORT, () => {
//   console.log(`Running at http://localhost:${PORT}`);
// });

module.exports.handler = serverless(app);
