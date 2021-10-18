import { Loan } from "./loan";
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
  tableName: "loan_types",
};

const LoanType = connection.define("LoanType", modelAttributes, modelOptions);

LoanType.hasOne(Loan);
