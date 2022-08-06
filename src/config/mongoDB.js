require('dotenv').config();

const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.connect(process.env.MONGODB_URL).then(() => {
    logger.info('Connected to MongoDB');
});