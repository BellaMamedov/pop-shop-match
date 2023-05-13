const mongoose = require('mongoose');
 
const assetSchema = new mongoose.Schema({
    address: String,
    city: String,
    photos: [String],
    description: String,

});

const AssetModel = mongoose.model('Asset', assetSchema);
module.exports = AssetModel;