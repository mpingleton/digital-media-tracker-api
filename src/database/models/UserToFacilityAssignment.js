const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('UserToFacilityAssignment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
        },
        facility_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "facilities",
                key: "id"
            },
        },
    }, {
        tableName: "user_to_facility_assignments",
        timestamps: false
    });
};