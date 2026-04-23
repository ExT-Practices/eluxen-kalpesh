const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    delay: { type: String },
    socials: {
        fb: { type: String, default: '#' },
        ig: { type: String, default: '#' },
        li: { type: String, default: '#' }
    }
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);
