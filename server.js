require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(express.json());
app.use(logger);
app.use(morgan('dev'));

app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));