const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Session', {
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
        access_token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false
        },
        invalidated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {
        tableName: "sessions",
        timestamps: false
    });
};