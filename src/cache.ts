import { gql, makeVar, useQuery } from '@apollo/client';
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';


const httpLink = new HttpLink({
    uri: "http://it2810-01.idi.ntnu.no:4001/graphql",
});



const authLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // const value = await AsyncStorage.getItem('TASKS');
    
  // return the headers to the context so httpLink can read them

    operation.setContext(() => {
        AsyncStorage.getItem("token").then((token) => {
            console.log("token", token);
            return {
                headers: {
                    authorization: token ? `Bearer ${token}` : '',
                }
            };
  });
    
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});


export const isLoggedInVar = makeVar<boolean>(false)
  
const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      console.log("tokenn", value);
      // We have data!!
      isLoggedInVar(true);
    }
  } catch (error) {
    // Error retrieving data
  }
}




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
 link: authLink.concat(httpLink),
  cache: cache,
});
