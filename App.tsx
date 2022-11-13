import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry, Button, Pressable } from 'react-native';
import { Testquery } from "./Testquery"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from './src/components/searchpage/SearchPage';


const Stack = createNativeStackNavigator();

export default function App() {

  const client = new ApolloClient({
    uri: 'http://it2810-01.idi.ntnu.no:4001/graphql',
    cache: new InMemoryCache()
});

type RootStackParamList = {
  Home: undefined;
  Pokemon: { pokemonID: number };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
  

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={({ navigation }) => ({
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
          component={Testquery}
          options={{ title: '' }}
        />
       
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar></StatusBar>
      </ApolloProvider>
  );
}

const HomeScreen = () => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        console.log("pressed")
      }
    />
  );
};
const ProfileScreen = (navigation: {navigate(path: string): void}) => {
  return <Text>This iss profile</Text>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('MyApplication', () => App);
