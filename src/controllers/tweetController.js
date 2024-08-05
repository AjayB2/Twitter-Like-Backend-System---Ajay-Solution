const tweetService = require('../services/tweetService');

exports.postTweet = async (req, res) => {
  try {
    const tweet = await tweetService.postTweet(req.user.userId, req.body.text);
    res.status(201).send('Tweet posted');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const cursor = req.query.cursor;
    const tweets = await tweetService.getUserTimeline(req.params.userId, cursor, limit);
    res.json(tweets);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
