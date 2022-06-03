const Joi = require('joi');

const getBaseById = Joi.object({
    params: Joi.object({
        baseId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const createBase = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        name: Joi.string().required(),
    }),
});

module.exports = {
    getBaseById,
    createBase,
};