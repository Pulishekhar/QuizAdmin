const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  stream:   { type: mongoose.Schema.Types.ObjectId, ref: 'Stream' },
  sender:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message:  { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
