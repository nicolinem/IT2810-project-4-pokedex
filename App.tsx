import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { PokemonPage } from "./src/components/pokemon/PokemonPage"
import LoginPage from './src/components/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from './src/components/searchpage/SearchPage';
import RegistrationPage from './src/components/login/Registration';
import LoginButton from './src/components/login/LoginButton';
import { client } from './cache';


const Stack = createNativeStackNavigator();

export default function App() {


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
                  headerRight: () => (
                  <>
                <LoginButton></LoginButton>
                  </>
          ),
                  }}
            />
              <Stack.Screen
              name="Pokemon"
              component={PokemonPage}
              options={{
              title: '',
              headerRight: () => (
                <>
                  <LoginButton></LoginButton>
                </>
          ),}}
            />
              <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ title: '' }}
            />
              <Stack.Screen
              name="Signup"
              component={RegistrationPage}
              options={{ title: '' }}
            />
          
              </Stack.Navigator>
          </NavigationContainer>
        <StatusBar></StatusBar>
      </ApolloProvider>
  );
}




AppRegistry.registerComponent('MyApplication', () => App);
