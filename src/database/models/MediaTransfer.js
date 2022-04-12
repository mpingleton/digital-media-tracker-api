const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('MediaTransfer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        media_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "media",
                key: "id"
            },
        },
        gaining_container_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "containers",
                key: "id"
            },
        },
        losing_container_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "containers",
                key: "id"
            },
        },
        gaining_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
        },
        losing_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        tableName: "media_transfers",
        timestamps: false
    });
};