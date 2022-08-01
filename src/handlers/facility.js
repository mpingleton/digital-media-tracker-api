const facilityService = require('../services/facility');
const assignmentService = require('../services/assignments');

const getFacilityById = async (req, res) => {
    const facility = await facilityService.getFacilityById(req.params.facilityId);
    res.send(200, facility);
};

const getFacilitiesInMe = async (req, res) => {
    const assignedFacilities = await assignmentService.getAssignmentsByUser(req.user.id);

    const facilityPromises = [];
    for (facilityId of assignedFacilities) {
        facilityPromises.push(facilityService.getFacilityById(facilityId));
    }
    const facilities = await Promise.all(facilityPromises);

    const data = {
        numberFacilities: facilities.length,
        facilities: facilities,
    };

    res.send(200, data);
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
    getFacilitiesInMe,
    getFacilitiesInBase,
    createFacility,
};