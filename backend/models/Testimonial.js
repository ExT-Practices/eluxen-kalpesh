const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    quote: String,
    name: String,
    role: String,
    image: String,
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
