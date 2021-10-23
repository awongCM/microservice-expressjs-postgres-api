// TODO - complete rest of implementation
import { getJWTToken, getSaltHashPassword, verifyPassword } from "../utils";
import {
  CustomerAlreadyExistsException,
  WrongLoginInfoException,
} from "../exceptions";
import { Customer } from "../db/models";
