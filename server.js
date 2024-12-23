const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');
const path = require('path');
require('dotenv').config();

const app = express();

const https = require('https');

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5000',  // Local development
    'https://mentorlink-demo.onrender.com', // Your Render domain
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

console.log(path.join(__dirname, '/client/dist'));
//Deployment
app.use(express.static(path.join(__dirname, '/client/dist')));

//Render Client
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')));
// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin123@crudcluster.utqnq.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function pingWebsite() {
  const url = "https://mentorlink-demo.onrender.com";
  
  https.get(url, (resp) => {
      const time = new Date().toLocaleString();
      console.log(`[${time}] Ping status: ${resp.statusCode}`);
  }).on('error', (err) => {
      console.log(`Error: ${err.message}`);
  });
}

// Run ping every 50 seconds
console.log("Starting website pinger...");
setInterval(pingWebsite, 50000);
pingWebsite(); // Initial ping

module.exports = app; 