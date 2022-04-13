const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('AccountabilityCheckItem', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        checklist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "accountability_checks",
                id: "id"
            },
        },
        media_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "media",
                id: "id"
            },
        },
        accounted_for: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: "accountability_check_items",
        timestamps: false
    });
};