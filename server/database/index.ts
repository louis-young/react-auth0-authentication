import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export const database = knex({
  client: "pg",
  connection: process.env.DATABASE_CONNECTION_STRING,
  searchPath: ["knex", "public"],
});
