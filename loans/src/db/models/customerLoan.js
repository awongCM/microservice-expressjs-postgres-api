import { Loan } from "./loan";
import { Customer } from "../../../../auth/src/db/models/customer";

Customer.belongsToMany(Loan, { through: "customer_loan" });
Loan.belongsToMany(Customer, { through: "customer_loan" });
