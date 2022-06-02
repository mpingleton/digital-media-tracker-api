const facilityService = require('../services/facility');

const getFacilityById = async (req, res) => {
    const facility = await facilityService.getFacilityById(req.params.facilityId);
    res.send(200, facility);
};

const createFacility = async (req, res) => {
    await facilityService.createFacility(req.body);
    res.send(201);
};

module.exports = {
    getFacilityById,
    createFacility,
};