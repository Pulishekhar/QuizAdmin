const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  isLive:      { type: Boolean, default: false },
  createdBy:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  viewers:     [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Stream', streamSchema);
