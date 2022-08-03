const containerService = require('../services/container');
const assignmentService = require('../services/assignments');

const getContainerById = async (req, res) => {
    const container = await containerService.getContainerById(req.params.containerId);
    res.send(200, container);
};

const getContainersInMe = async (req, res) => {
    const assignedFacilities = await assignmentService.getAssignmentsByUser(req.user.id);

    const containerPromises = [];
    for (facilityId of assignedFacilities) {
        containerPromises.push(containerService.getContainersInFacility(facilityId));
    }
    const containerArrays = await Promise.all(containerPromises);
    const containers = containerArrays.flat(2);

    const data = {
        numberContainers: containers.length,
        containers: containers,
    };
    res.send(200, data);
};

const getContainersInFacility = async (req, res) => {
    const containers = await containerService.getContainersInFacility(req.params.facilityId);
    const data = {
        numberContainers: containers.length,
        containers: containers,
    };
    res.send(200, data);
};

const createContainer = async (req, res) => {
    await containerService.createContainer(req.body);
    res.send(201);
};

module.exports = {
    getContainerById,
    getContainersInMe,
    getContainersInFacility,
    createContainer,
};