import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface PowerAttributes {
  id: number;
  name: string;
  description: string;
  powerLevel: number;
  range: string;
  role: string;
}

interface PowerCreationAttributes extends Optional<PowerAttributes, 'id'> {}

export class Power extends Model<PowerAttributes, PowerCreationAttributes> implements PowerAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public powerLevel!: number;
  public range!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function PowerFactory(sequelize: Sequelize): typeof Power {
  Power.init(
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
      tableName: 'powers',
      sequelize,
    }
  );

  return Power;
}