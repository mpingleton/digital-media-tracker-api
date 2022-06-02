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
    createFacility,
};