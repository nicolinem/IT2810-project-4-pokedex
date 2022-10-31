const fs = require("fs");
const path = require("path");
const { Login, Signup } = require("./resolvers");

const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"))
  .toString("utf-8");

const resolvers = {
  Mutation: {
    Signup,
    Login,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
