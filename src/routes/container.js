const express = require('express');

const containerHandler = require('../handlers/container');
const containerValidator = require('../validators/container');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/id/:containerId', sessionMiddleware.verifySessionAndRole(["ADMIN", "USER"]), validator(containerValidator.getContainerById), containerHandler.getContainerById);
router.get('/in/me', sessionMiddleware.verifySessionAndRole(["ADMIN", "USER"]), containerHandler.getContainersInMe);
router.get('/in/facility/:facilityId', sessionMiddleware.verifySessionAndRole(["ADMIN", "USER"]), validator(containerValidator.getContainersInFacility), containerHandler.getContainersInFacility);
router.put('/', sessionMiddleware.verifySessionAndRole("ADMIN"), validator(containerValidator.createContainer), containerHandler.createContainer);

module.exports = router;