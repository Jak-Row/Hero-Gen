import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface TagAttributes {
  id: number;
  name: string;
  description: string;
}

interface TagCreationAttributes extends Optional<TagAttributes, 'id'> {}

export class Tag extends Model<TagAttributes, TagCreationAttributes> implements TagAttributes {
  public id!: number;
  public name!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function TagFactory(sequelize: Sequelize): typeof Tag {
  Tag.init(
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
      tableName: 'tags',
      sequelize,
    }
  );
  return Tag;
}