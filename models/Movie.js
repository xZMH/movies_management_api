const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: String,
    description: String,
    year: Number,
    category: String
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
