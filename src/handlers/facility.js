const facilityService = require('../services/facility');

const getFacilityById = async (req, res) => {
    const facility = await facilityService.getFacilityById(req.params.facilityId);
    res.send(200, facility);
};

const getFacilitiesInBase = async (req, res) => {
    const facilities = await facilityService.getFacilitiesInBase(req.params.baseId);
    const data = {
        numberFacilities: facilities.length,
        facilities: facilities,
    };
    res.send(200, data);
};

const createFacility = async (req, res) => {
    await facilityService.createFacility(req.body);
    res.send(201);
};

module.exports = {
    getFacilityById,
    getFacilitiesInBase,
    createFacility,
};