const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Origin extends Model {}

Origin.init(
    {
        origin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        origin_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        origin_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'origin'
    }

);

module.exports = Origin;