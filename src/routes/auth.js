const express = require('express');

const authHandlers = require('../handlers/auth');
const authValidator = require('../validators/auth');
const sessionMiddleware = require('../middleware/session');
const validator = require('../middleware/validator');

const router = express.Router();

router.post('/login', validator(authValidator.login), authHandlers.login);
router.post('/logout', sessionMiddleware.verifySession, authHandlers.logout);

module.exports = router;