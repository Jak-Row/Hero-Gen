const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gadget extends Model {}

Gadget.init(
    {
        gadget_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        gadget_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gadget_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gadget_powerLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gadget_range: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gadget_role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'gadget'
    }
);

module.exports = Gadget;