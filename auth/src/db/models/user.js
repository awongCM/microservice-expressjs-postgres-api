import { connection } from "../config";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
      len: [2, 255],
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const modelOptions = {
  tableName: "users",
};

const User = connection.define("User", modelAttributes, modelOptions);
