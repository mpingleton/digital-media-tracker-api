const { models } = require('../database');

const getContainerById = async (containerId) => {
    const data = await models.Container.findOne({
        where: {
            id: containerId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const container = {
        id: data.id,
        facilityId: data.facility_id,
        description: data.description,
    };

    return container;
};

const getContainersInFacility = async (facilityId) => {
    const data = await models.Container.findAll({
        where: {
            facility_id: facilityId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const containers = data.map((container) => ({
        id: container.id,
        facilityId: container.facility_id,
        description: container.description,
    }));

    return containers;
};

module.exports = {
    getContainerById,
    getContainersInFacility,
};