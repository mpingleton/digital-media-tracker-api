const Joi = require('joi');

const getContainerById = Joi.object({
    params: Joi.object({
        containerId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const getContainersInFacility = Joi.object({
    params: Joi.object({
        facilityId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const createContainer = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        facilityId: Joi.number().integer().required(),
        description: Joi.string().required(),
    }),
});

module.exports = {
    getContainerById,
    getContainersInFacility,
    createContainer,
};