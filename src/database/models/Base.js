const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Base', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: "bases",
        timestamps: false
    });
};