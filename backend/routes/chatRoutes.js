// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { getMessages, postMessage } = require('../controllers/chatController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/:streamId', authMiddleware, getMessages);
router.post('/', authMiddleware, postMessage);

module.exports = router;
