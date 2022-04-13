const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('MediaDocument', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        media_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "media",
                key: "id"
            },
        },
        checksum_md5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: "media_documents",
        timestamps: false
    });
};