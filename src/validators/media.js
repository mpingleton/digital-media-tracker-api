const Joi = require('joi');

const getMediaById = Joi.object({
    params: Joi.object({
        mediaId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const getMediaInContainer = Joi.object({
    params: Joi.object({
        containerId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const getMediaInFacility = Joi.object({
    params: Joi.object({
        facilityId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

const createMedia = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        containerId: Joi.number().integer().required(),
        controlNumber: Joi.string().required(),
        title: Joi.string().required(),
        mediaType: Joi.string().required(),
        classification: Joi.string().required(),
        status: Joi.string().required(),
    }),
});

module.exports = {
    getMediaById,
    getMediaInContainer,
    getMediaInFacility,
    createMedia,
};