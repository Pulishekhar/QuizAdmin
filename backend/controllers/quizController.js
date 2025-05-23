// controllers/quizController.js
const Quiz = require('../models/Quiz');
const Answer = require('../models/Answer');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.activateQuiz = async (req, res) => {
  try {
    await Quiz.updateMany({ streamId: req.body.streamId }, { isActive: false });
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getActiveQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ streamId: req.params.streamId, isActive: true });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// const Quiz = require('../models/Quiz');

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
