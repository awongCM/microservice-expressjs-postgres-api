import { configs } from "./config";

const { Sequelize } = require("sequealize");

const enabledConfig = configs[process.env?.ACTIVE_ENV];
export const connection = new Sequelize(enabledConfig.uri, {
  logging: enabledConfig.logging,
});
