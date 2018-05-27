import { Sequelize } from 'sequelize';
import { mysqlDb } from '../libs';

const DataTypes = Sequelize;

export const Category = mysqlDb.define(
  'categories',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    parent_id: {
      type: DataTypes.INTEGER(11)
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT
    },

    status: {
      type: DataTypes.TINYINT
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },

    deletedAt: {
      type: DataTypes.DATE
    },

    createdBy: {
      type: DataTypes.INTEGER(11)
    },
    updatedBy: {
      type: DataTypes.INTEGER(11)
    }
  },
  {
    tableName: 'categories',
    timestamps: true
  }
);
