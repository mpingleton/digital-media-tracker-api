const express = require('express');

const baseHandler = require('../handlers/base');
const baseValidator = require('../validators/base');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();



module.exports = router;