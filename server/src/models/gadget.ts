import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface GadgetAttributes {
  id: number;
  name: string;
  description: string;
  powerLevel: number;
  range: string;
  role: string;
}

interface GadgetCreationAttributes extends Optional<GadgetAttributes, 'id'> {}

export class Gadget extends Model<GadgetAttributes, GadgetCreationAttributes> implements GadgetAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public powerLevel!: number;
  public range!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function GadgetFactory(sequelize: Sequelize): typeof Gadget {
  Gadget.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      powerLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      range: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'gadgets',
      sequelize,
    }
  );

  return Gadget;
}