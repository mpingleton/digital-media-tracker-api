const express = require('express');

const userHandler = require('../handlers/user');
const userValidator = require('../validators/user');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/self', sessionMiddleware.verifySessionAndRole(), userHandler.getSelf);
router.get('/id/:userId', sessionMiddleware.verifySessionAndRole(['USER', 'ADMIN']), validator(userValidator.getUserById), userHandler.getUserById);
router.put('/', sessionMiddleware.verifySessionAndRole("ADMIN"), validator(userValidator.createUser), userHandler.createUser);

module.exports = router;