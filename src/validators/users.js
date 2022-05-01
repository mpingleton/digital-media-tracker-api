const Joi = require('joi');

const getUserById = Joi.object({
    params: Joi.object({
        userId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

module.exports = {
    getUserById,
};