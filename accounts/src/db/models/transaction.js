import { Account } from ".";
import { connection } from "../config";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  timeStamp: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      isDate: true,
      isAfter: "1970-01-01",
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },
};

const modelOptions = {
  tableName: "transactions",
};

const Transaction = connection.define(
  "Transaction",
  modelAttributes,
  modelOptions
);

Transaction.belongsTo(Account);
