const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question:     { type: String, required: true },
  options:      [{ type: String, required: true }],
  correctIndex: { type: Number, required: true },
  betPoints:    { type: Number, enum: [10, 50, 100], default: 10 },
  isActive:     { type: Boolean, default: false }, // Only one active quiz at a time
  streamId:     { type: mongoose.Schema.Types.ObjectId, ref: 'Stream' },
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
