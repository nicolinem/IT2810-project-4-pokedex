import { gql, makeVar, useQuery } from '@apollo/client';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from "@apollo/client/link/context";


const httpLink = new HttpLink({
    uri: "http://it2810-01.idi.ntnu.no:4001/graphql",
});

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      // We have data!!
      return value;
    } else {
       console.log('No token found');
    }
  } catch (error) {
    console.log("error")
  }
};

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");

  return {
     headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

  
// const authLink = new ApolloLink((operation, forward) => {
//   // get the authentication token from local storage if it exists
  
//   // return the headers to the context so httpLink can read them

//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   });

//   // Call the next link in the middleware chain.
//   return forward(operation);
// });

// export const isLoggedInVar = makeVar<boolean>(AsyncStorage.getItem('token'));
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            // return isLoggedInVar();
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
 link: authLink.concat(httpLink),
  cache: cache,
});
