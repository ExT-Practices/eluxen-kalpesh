const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    image: String,
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
