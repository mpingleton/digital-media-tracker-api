const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Media', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        container_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "containers",
                key: "id"
            },
        },
        control_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        media_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classification: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lifecycle_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: "media",
        timestamps: false
    });
};