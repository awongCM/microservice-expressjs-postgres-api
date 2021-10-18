import { connection } from "../config";
import { LoanType } from "./loanType";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },
  interestRate: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      isFloat: true,
    },
  },
  lastAccessTimeStamp: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      isDate: true,
      isAfter: "1970-01-01",
    },
  },
};

const modelOptions = {
  tableName: "loan",
};

const Loan = connection.define("Loan", modelAttributes, modelOptions);
Loan.belongsTo(LoanType, {
  foreignKey: "loan_type_id",
});
