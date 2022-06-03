const { models } = require('../database');

const getFacilityById = async (facilityId) => {
    const data = await models.Facility.findOne({
        where: {
            id: facilityId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const facility = {
        id: data.id,
        baseId: data.base_id,
        description: data.description,
        buildingAddress: data.building_address,
        buildingNumber: data.building_number,
        roomNumber: data.room_number,
    };

    return facility;
};

const getFacilitiesInBase = async (baseId) => {
    const data = await models.Facility.findAll({
        where: {
            base_id: baseId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const facilities = data.map((facility) => ({
        id: facility.id,
        baseId: facility.base_id,
        description: facility.description,
        buildingAddress: facility.building_address,
        buildingNumber: facility.building_number,
        roomNumber: facility.room_number,
    }));

    return facilities;
};

const createFacility = async (data) => {
    await models.Facility.create({
        base_id: data.baseId,
        description: data.description,
        building_address: data.buildingAddress,
        building_number: data.buildingNumber,
        room_number: data.roomNumber,
    });
};

module.exports = {
    getFacilityById,
    getFacilitiesInBase,
    createFacility,
};