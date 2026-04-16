const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    delay: { type: String, default: "0.3s" }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
