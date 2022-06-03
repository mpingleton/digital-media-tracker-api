const Joi = require('joi');

const getFacilityById = Joi.object({
    params: Joi.object({
        facilityId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const getFacilitiesInBase = Joi.object({
    params: Joi.object({
        baseId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const createFacility = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        baseId: Joi.number().integer().required(),
        description: Joi.string().required(),
        buildingAddress: Joi.string().required(),
        buildingNumber: Joi.string().required(),
        roomNumber: Joi.string().required(),
    }),
});

module.exports = {
    getFacilityById,
    getFacilitiesInBase,
    createFacility,
};