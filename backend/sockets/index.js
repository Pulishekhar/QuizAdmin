// sockets/index.js
let io = null;

const initSockets = (server) => {
  const { Server } = require('socket.io');
  io = new Server(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('joinStream', (streamId) => {
      socket.join(streamId);
      io.to(streamId).emit('userJoined', socket.id);
    });

    socket.on('chatMessage', ({ streamId, message, user }) => {
      io.to(streamId).emit('chatMessage', { user, message });
    });

    socket.on('quizActivated', ({ streamId, quiz }) => {
      io.to(streamId).emit('quizActivated', quiz);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
};

module.exports = { initSockets, getIO };
