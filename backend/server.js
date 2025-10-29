const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello ${name}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

