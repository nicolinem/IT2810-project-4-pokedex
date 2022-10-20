import fs from "fs";
import path from "path";
import { Login, Signup } from "./resolvers";

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

const resolvers = {
  Query: {
    Login,
  },
  Mutation: {
    Signup,
  },
};

const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"))
  .toString("utf-8");

module.exports = {
  typeDefs,
  resolvers,
};
