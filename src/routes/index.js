const express = require('express');

const authRoute = require('./auth');
const userRoute = require('./user');
const mediaRoute = require('./media');
const containerRoute = require('./container');
const facilityRoute = require('./facility');
const baseRoute = require('./base');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/media', mediaRoute);
router.use('/container', containerRoute);
router.use('/facility', facilityRoute);
router.use('/base', baseRoute);

module.exports = router;