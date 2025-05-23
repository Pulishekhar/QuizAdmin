const express = require('express');
const router = express.Router();

const streamController = require('../controllers/streamController');

console.log('Stream controller loaded:', streamController); // for debug

router.get('/', streamController.getLiveStreams);
router.post('/start', streamController.startStream);
router.post('/stop/:id', streamController.stopStream);

module.exports = router;
