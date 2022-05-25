const mediaService = require('../services/media');
const containerService = require('../services/container');

const getMediaById = async (req, res) => {
    const media = await mediaService.getMediaById(req.params.mediaId);

    res.send(200, media);
};

const getMediaInContainer = async (req, res) => {
    const media = await mediaService.getMediaInContainer(req.params.containerId);
    const data = {
        numberMedia: media.length,
        media: media,
    };
    res.send(200, data);
};

const getMediaInFacility = async (req, res) => {
    const containers = await containerService.getContainersInFacility(req.params.facilityId);
    const promises = [];
    for (container of containers) {
        promises.push(mediaService.getMediaInContainer(container.id));
    }
    const mediaArrays = await Promise.all(promises);
    const media = mediaArrays.flat(2);

    const data = {
        numberMedia: media.length,
        media: media,
    };

    res.send(200, data);
};

const createMedia = async (req, res) => {
    await mediaService.createMedia(req.body);
    res.send(201);
};

module.exports = {
    getMediaById,
    getMediaInContainer,
    getMediaInFacility,
    createMedia,
};