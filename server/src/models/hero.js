const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hero extends Model {}

Hero.init(
    {
        hero_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        hero_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //hero_description: {
        //    type: DataTypes.STRING,
        //    allowNull: false
        //},
        hero_powerLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hero_range: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hero_role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hero_originID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'origin',
                key: 'origin_id'
            }
        },
        hero_powerID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'power',
                key: 'power_id'
            }
        },
        hero_gadgetID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'gadget',
                key: 'gadget_id'
            },
        }  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hero'
    }
);

module.exports = Hero;