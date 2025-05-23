// controllers/streamController.js
const Stream = require('../models/Stream');

exports.startStream = async (req, res) => {
  try {
    const stream = new Stream({ ...req.body, isLive: true, createdBy: req.user.id });
    await stream.save();
    res.status(201).json(stream);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.stopStream = async (req, res) => {
  try {
    const stream = await Stream.findByIdAndUpdate(req.params.id, { isLive: false }, { new: true });
    res.json(stream);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLiveStreams = async (req, res) => {
  try {
    const streams = await Stream.find({ isLive: true });
    res.json(streams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
