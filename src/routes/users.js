const express = require('express');

const usersHandlers = require('../handlers/users');
const usersValidator = require('../validators/users');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.get('/self', sessionMiddleware.verifySessionAndRole(), usersHandlers.getSelf);
router.get('/id/:userId', sessionMiddleware.verifySessionAndRole(['USER', 'ADMIN']), validator(usersValidator.getUserById), usersHandlers.getUserById);

module.exports = router;