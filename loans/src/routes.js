// TODO
import express from "express";
import { getLoans, registerLoans } from "./services";
import { resultCodes } from "./enums";

const accountsRoute = express.Router();

accountsRoute.post("/register", async function (req, res, next) {
  const { name, email, password } = req.body;
  registerLoans(name, email, password)
    .then(() => res.status(201).json({ result: resultCodes.SUCCESS }))
    .catch(next);
});

accountsRoute.get("/:id", async function (req, res, next) {
  const loanId = req.headers["loan-id"];
  getLoans(loanId, req.params.id)
    .then(() => res.status(201).json({ result: resultCodes.SUCCESS }))
    .catch(next);
});

export { accountsRoute };
