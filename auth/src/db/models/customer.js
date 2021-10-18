import { connection } from "../config";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      isAlphanumeric: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
};

const modelOptions = {
  tableName: "customers",
};

const User = connection.define("Customer", modelAttributes, modelOptions);
