const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quiz:      { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  selected:  { type: Number, required: true }, // selected option index
  isCorrect: { type: Boolean },
  bet:       { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Answer', answerSchema);
