const express = require('express');

const mediaHandler = require('../handlers/media');
const mediaValidator = require('../validators/media');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();



module.exports = router;