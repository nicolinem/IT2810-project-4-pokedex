import fs from "fs";
import path from "path";
import { Login, Signup } from "./resolvers";

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

export const resolvers = {
  Query: {
    Login,
  },
  Mutation: {
    Signup,
  },
};

export const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"))
  .toString("utf-8");
  