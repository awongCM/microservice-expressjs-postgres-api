import { Account } from "./account";
import { Customer } from "../../../../auth/src/db/models/customer";

Customer.belongsToMany(Account, { through: "customer_account" });
Account.belongsToMany(Customer, { through: "customer_account" });
