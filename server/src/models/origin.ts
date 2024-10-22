import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface OriginAttributes {
  id: number;
  name: string;
  description: string;
}

interface OriginCreationAttributes extends Optional<OriginAttributes, 'id'> {}

export class Origin extends Model<OriginAttributes, OriginCreationAttributes> implements OriginAttributes {
  public id!: number;
  public name!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function OriginFactory(sequelize: Sequelize): typeof Origin {
  Origin.init(
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
    },
    {
      tableName: 'origins',
      sequelize
    }
  );
    return Origin;
}