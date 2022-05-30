const containerService = require('../services/container');

const getContainerById = async (req, res) => {
    const container = await containerService.getContainerById(req.params.containerId);
    res.send(200, container);
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
    getContainersInFacility,
    createContainer,
};