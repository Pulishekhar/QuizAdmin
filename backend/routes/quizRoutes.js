const express = require('express');
const router = express.Router();
const {
  createQuiz,
  activateQuiz,
  getActiveQuiz,
  getAllQuizzes // ⬅ Add this to import
} = require('../controllers/quizController');
const { authMiddleware, adminOnly } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, adminOnly, createQuiz);
router.put('/activate/:id', authMiddleware, adminOnly, activateQuiz);
router.get('/active/:streamId', authMiddleware, getActiveQuiz);

// ✅ Add this new route
router.get('/', authMiddleware, getAllQuizzes);

module.exports = router;
