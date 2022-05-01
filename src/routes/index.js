const express = require('express');

const authRoute = require('./auth');
const usersRoute = require('./users');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', usersRoute);

module.exports = router;