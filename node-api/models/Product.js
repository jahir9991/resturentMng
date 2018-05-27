import { Sequelize } from 'sequelize';
import { mysqlDb } from '../libs';

const DataTypes = Sequelize;

export const Product = mysqlDb.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    price: {
      type: DataTypes.DOUBLE(),
      allowNull: false
    },
    cost: {
      type: DataTypes.DOUBLE(),
      allowNull: true
    },
    rating: {
      type: DataTypes.DOUBLE(),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER(11)
    },
    subCategory_id: {
      type: DataTypes.INTEGER(11)
    },
    group_id: {
      type: DataTypes.INTEGER(11)
    },


    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
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
      type: DataTypes.DATE,
      allowNull: true
    },

    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    updatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  },
  {
    tableName: 'products',
    timestamps: true
  }
);
