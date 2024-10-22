import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attributes for the Hero model
interface HeroAttributes {
  id: number;
  name: string;
  description: string;
  powerLevel: number;
  range: string;
  powerID: number;
  gadgetID: number;
  role: string;
  originID: number;
}

interface HeroCreationAttributes extends Optional<HeroAttributes, 'id'> {}

export class Hero extends Model<HeroAttributes, HeroCreationAttributes> implements HeroAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public powerLevel!: number;
  public range!: string;
  public powerID!: number;
  public gadgetID!: number;
  public role!: string;
  public originID!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function HeroFactory (sequelize: Sequelize): typeof Hero {
  Hero.init(
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
      powerID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gadgetID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'heroes',
      sequelize,
    }
  );

  return Hero;
}


