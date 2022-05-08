const express = require('express');

const authRoute = require('./auth');
const userRoute = require('./user');
const mediaRoute = require('./media');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/media', mediaRoute);

module.exports = router;