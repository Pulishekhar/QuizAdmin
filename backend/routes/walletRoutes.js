// routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const { betPoints, topUpWallet } = require('../controllers/walletController');
const { authMiddleware, adminOnly } = require('../middleware/authMiddleware');

router.post('/bet', authMiddleware, betPoints);
router.post('/topup', authMiddleware, adminOnly, topUpWallet);

module.exports = router;
