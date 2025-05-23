// controllers/walletController.js
const User = require('../models/User');
const Answer = require('../models/Answer');
const Quiz = require('../models/Quiz');

exports.betPoints = async (req, res) => {
  try {
    const { userId, quizId, selected, bet } = req.body;
    const user = await User.findById(userId);
    if (user.wallet < bet) return res.status(400).json({ msg: 'Insufficient points' });
    user.wallet -= bet;
    await user.save();

    const quiz = await Quiz.findById(quizId);
    const isCorrect = selected === quiz.correctIndex;
    if (isCorrect) user.wallet += 2 * bet;
    await user.save();

    const answer = new Answer({ user: userId, quiz: quizId, selected, isCorrect, bet });
    await answer.save();

    res.status(200).json({ isCorrect, wallet: user.wallet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.topUpWallet = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await User.findById(userId);
    user.wallet += amount;
    await user.save();
    res.json({ wallet: user.wallet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
