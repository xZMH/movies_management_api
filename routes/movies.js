const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const { protect, authorize } = require('./protect');

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

router.post('/', protect, authorize('admin'), async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
});

router.put('/:id', protect, authorize('admin'), async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
});

router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie deleted' });
});

module.exports = router;