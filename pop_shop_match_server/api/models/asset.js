const mongoose = require("mongoose");


const assetSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },  priceperday: {
    type: Number,
    required: true,
  }
});

const AssetModel = mongoose.model("Asset", assetSchema);
module.exports = AssetModel;
