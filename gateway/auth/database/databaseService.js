import knex from "knex";
import { knexConfig } from "./knexfile.js";

export const databaseService = knex(knexConfig);