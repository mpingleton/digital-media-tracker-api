const { models } = require('../database');

const getAssignmentsByUser = async (userId) => {
    const data = await models.UserToFacilityAssignment.findAll({
        where: {
            user_id: userId,
        },
    });
    if (data === null) {
        throw 1;
    }

    const assignments = data.map((assignment) => (assignment.facility_id));

    return assignments;
};

module.exports = {
    getAssignmentsByUser,
};