const express = require('express');

const mediaHandler = require('../handlers/media');
const mediaValidator = require('../validators/media');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/id/:mediaId', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), validator(mediaValidator.getMediaById), mediaHandler.getMediaById);
router.put('/', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), validator(mediaValidator.createMedia), mediaHandler.createMedia);

module.exports = router;