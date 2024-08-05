const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const authenticateToken = require('../utils/authenticateToken');

router.post('/', authenticateToken, tweetController.postTweet);
router.get('/:userId/timeline', authenticateToken, tweetController.getUserTimeline);

module.exports = router;
