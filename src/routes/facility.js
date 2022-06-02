const express = require('express');

const facilityHandler = require('../handlers/facility');
const facilityValidator = require('../validators/facility');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();



module.exports = router;