const express = require('express');

const mediaHandler = require('../handlers/media');
const mediaValidator = require('../validators/media');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/id/:mediaId', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), validator(mediaValidator.getMediaById), mediaHandler.getMediaById);
router.get('/in/me', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), mediaHandler.getMediaInMe);
router.get('/in/container/:containerId', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), validator(mediaValidator.getMediaInContainer), mediaHandler.getMediaInContainer);
router.get('/in/facility/:facilityId', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), validator(mediaValidator.getMediaInFacility), mediaHandler.getMediaInFacility);
router.put('/', sessionMiddleware.verifySessionAndRole(["USER", "ADMIN"]), validator(mediaValidator.createMedia), mediaHandler.createMedia);

module.exports = router;