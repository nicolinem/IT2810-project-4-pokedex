import {
  ApolloClient,
  gql,
  InMemoryCache,
  makeVar,
  useQuery,
} from "@apollo/client";

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem("token"));

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn;
}

export const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: cache,
});
