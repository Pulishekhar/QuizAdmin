require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const connectDB = require('./db'); // ✅ use db.js
const { initSockets } = require('./sockets');

const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const streamRoutes = require('./routes/streamRoutes');
const walletRoutes = require('./routes/walletRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);

// Initialize Sockets
initSockets(server);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/stream', streamRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/chat', chatRoutes);

// ✅ Connect to MongoDB then start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
