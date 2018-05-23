const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true, trim: true},
    catalog: {type: String, required: true, trim: true},
    platform: {type: String, required: true, trim: true},
    price: {type: Number, required: true, trim: true},
    quantity: {type: Number, default: 1, trim: true, min:0},
},
    {collection: 'products'}
);

module.exports = mongoose.model('Product', productSchema);