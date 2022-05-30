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
        lifecycleState: data.lifecycle_state,
    };

    return media;
};

const getMediaInContainer = async (containerId) => {
    const data = await models.Media.findAll({
        where: {
            container_id: containerId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const media = data.map((mediaData) => ({
        id: mediaData.id,
        containerId: mediaData.container_id,
        controlNumber: mediaData.control_number,
        title: mediaData.title,
        mediaType: mediaData.media_type,
        classification: mediaData.classification,
        lifecycleState: mediaData.lifecycle_state,
    }));

    return media;
};

const createMedia = async (data) => {
    await models.Media.create({
        container_id: data.containerId,
        control_number: data.controlNumber,
        title: data.title,
        media_type: data.mediaType,
        classification: data.classification,
        lifecycle_state: data.lifecycleState,
    });
};

module.exports = {
    getMediaById,
    getMediaInContainer,
    createMedia,
};