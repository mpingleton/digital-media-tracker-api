const express = require('express');

const authHandlers = require('../handlers/auth');
const authValidator = require('../validators/auth');
const validator = require('../middleware/validator');

const router = express.Router();

router.post('/login', validator(authValidator.login), authHandlers.login);
router.post('/logout', authHandlers.logout);

module.exports = router;