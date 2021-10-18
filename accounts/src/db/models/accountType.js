import { Account } from ".";
import { connection } from "../config";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const modelOptions = {
  tableName: "account_types",
};

const AccountType = connection.define(
  "AccountType",
  modelAttributes,
  modelOptions
);

AccountType.hasOne(Account);
