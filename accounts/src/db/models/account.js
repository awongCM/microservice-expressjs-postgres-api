import { connection } from "../config";

const { DataTypes } = require("sequelize");

const modelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
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
  overDraft: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isDecimal: true,
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
  tableName: "accounts",
};

const Account = connection.define("Account", modelAttributes, modelOptions);

Account.belongsTo(AccountType, {
  foreignKey: "account_type_id",
});

Account.hasMany(Transaction, {
  foreignKey: "transaction_id",
});
