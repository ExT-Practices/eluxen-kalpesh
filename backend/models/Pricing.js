const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    features: [String],
}, { timestamps: true });

module.exports = mongoose.model('Pricing', pricingSchema);
