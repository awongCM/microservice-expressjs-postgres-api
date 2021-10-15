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
  tableName: "accounts",
};

const Account = connection.define("Account", modelAttributes, modelOptions);
