const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Power extends Model {}

Power.init(
    {
        power_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        power_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        power_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        power_powerLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        power_range: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        power_role: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'power'
    }
)

module.exports = Power;