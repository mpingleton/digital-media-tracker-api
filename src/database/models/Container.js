const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Container', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        facility_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "facilities",
                key: "id"
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: "containers",
        timestamps: false
    });
};