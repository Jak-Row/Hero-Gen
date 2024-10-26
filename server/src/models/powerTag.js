const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PowerTag extends Model {}

PowerTag.init(
    {
        power_tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        power_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'power',
                key: 'power_id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'tag_id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'powerTag'
    }
);