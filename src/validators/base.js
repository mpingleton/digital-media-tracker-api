const Joi = require('joi');

const getBaseById = Joi.object({
    params: Joi.object({
        baseId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

module.exports = {
    getBaseById,
};