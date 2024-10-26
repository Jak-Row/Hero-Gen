const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GadgetTag extends Model {}

GadgetTag.init(
    {
        gadget_tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        gadget_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gadget',
                key: 'gadget_id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'tag_id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'gadgetTag'
    }
);