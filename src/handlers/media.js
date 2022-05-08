const mediaService = require('../services/media');

const getMediaById = async (req, res) => {
    const media = await mediaService.getMediaById(req.params.mediaId);

    res.send(200, media);
};

const createMedia = async (req, res) => {
    await mediaService.createMedia(req.body);
    res.send(201);
};

module.exports = {
    getMediaById,
    createMedia,
};