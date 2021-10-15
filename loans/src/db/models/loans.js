import { connection } from "../config";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  transactionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

const modelOptions = {
  tableName: "loans",
};

const Loans = connection.define("Loans", modelAttributes, modelOptions);
