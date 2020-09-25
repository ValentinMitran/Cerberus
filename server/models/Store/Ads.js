const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
  },
  description: {
    type: String,
    required: true,
    min: 6,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Ads", adsSchema);
