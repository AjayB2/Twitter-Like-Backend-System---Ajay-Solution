
const tweetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model('Tweet', tweetSchema);
