const express = require('express');

const facilityHandler = require('../handlers/facility');
const facilityValidator = require('../validators/facility');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/id/:facilityId', sessionMiddleware.verifySessionAndRole(["ADMIN", "USER"]), validator(facilityValidator.getFacilityById), facilityHandler.getFacilityById);
router.put('/', sessionMiddleware.verifySessionAndRole("ADMIN"), validator(facilityValidator.createFacility), facilityHandler.createFacility);

module.exports = router;