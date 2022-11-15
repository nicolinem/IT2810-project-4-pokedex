import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry, Button, Pressable } from 'react-native';
import { PokemonPage } from "./src/components/pokemon/PokemonPage"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from './src/components/searchpage/SearchPage';


const Stack = createNativeStackNavigator();

export default function App() {

  const client = new ApolloClient({
    uri: 'http://it2810-01.idi.ntnu.no:4001/graphql',
    cache: new InMemoryCache()
});

  

  return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={() => ({
                headerStyle: {
                backgroundColor: "#121A36",
                
                  },
                  headerTintColor: "#fff",
                })}>
              <Stack.Screen
              name="Home"
              component={SearchPage}
                options={{
                  title: 'P o k è d e x',
                  }}
            />
              <Stack.Screen
              name="Pokemon"
              component={PokemonPage}
              options={{ title: '' }}
            />
          
              </Stack.Navigator>
          </NavigationContainer>
        <StatusBar></StatusBar>
      </ApolloProvider>
  );
}




AppRegistry.registerComponent('MyApplication', () => App);
