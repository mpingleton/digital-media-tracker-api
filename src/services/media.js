const { models } = require('../database');

const getMediaById = async (mediaId) => {
    const data = await models.Media.findOne({
        where: {
            id: mediaId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const media = {
        id: data.id,
        containerId: data.containerId,
        controlNumber: data.control_number,
        title: data.title,
        mediaType: data.media_type,
        classification: data.classification,
        status: data.status,
    };

    return media;
};

const createMedia = async (data) => {
    await models.Media.create({
        container_id: data.containerId,
        control_number: data.controlNumber,
        title: data.title,
        media_type: data.mediaType,
        classification: data.classification,
        status: data.status,
    });
};

module.exports = {
    getMediaById,
    createMedia,
};