const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('AccountabilityCheck', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        started: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        completed: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        tableName: "accountability_checks",
        timestamps: false
    });
};