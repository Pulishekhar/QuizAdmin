// controllers/chatController.js
const ChatMessage = require('../models/ChatMessage');

exports.getMessages = async (req, res) => {
  try {
    const messages = await ChatMessage.find({ stream: req.params.streamId }).populate('sender', 'username');
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postMessage = async (req, res) => {
  try {
    const msg = await ChatMessage.create({ stream: req.body.streamId, sender: req.user.id, message: req.body.message });
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
