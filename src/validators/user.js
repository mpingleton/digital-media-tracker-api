const Joi = require('joi');

const getUserById = Joi.object({
    params: Joi.object({
        userId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const createUser = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        username: Joi.string().required(),
        passphrase: Joi.string().required(),
        role: Joi.string().required(),
        rank: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
    }),
});

module.exports = {
    getUserById,
    createUser,
};