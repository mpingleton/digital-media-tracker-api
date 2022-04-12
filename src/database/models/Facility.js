const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Facility', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        base_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "bases",
                key: "id"
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        building_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        building_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: "facilities",
        timestamps: false
    });
};