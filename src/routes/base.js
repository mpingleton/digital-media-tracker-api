const express = require('express');

const baseHandler = require('../handlers/base');
const baseValidator = require('../validators/base');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/id/:baseId', sessionMiddleware.verifySessionAndRole(["ADMIN", "USER"]), validator(baseValidator.getBaseById), baseHandler.getBaseById);
router.put('/', sessionMiddleware.verifySessionAndRole("ADMIN"), validator(baseValidator.createBase), baseHandler.createBase);

module.exports = router;