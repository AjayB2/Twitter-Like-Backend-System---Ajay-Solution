const Tweet = require('../models/tweet');

const postTweet = async (userId, text) => {
  const tweet = new Tweet({ userId, text });
  await tweet.save();
  return tweet;
};

const getUserTimeline = async (userId, cursor, limit) => {
  const query = { userId };
  if (cursor) {
    query._id = { $lt: cursor };
  }

  const tweets = await Tweet.find(query)
    .sort({ _id: -1 })
    .limit(limit);
    
  return tweets;
};

module.exports = {
  postTweet,
  getUserTimeline
};
