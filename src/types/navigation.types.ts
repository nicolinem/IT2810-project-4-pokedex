import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type StackNavigatorParamList = {
  Home: undefined;
  Pokemon: {
    id: number;
  };
  Login: undefined;
  Signup: undefined;
};

export type CardNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Home'
    >;

    export type PokemonScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'Pokemon'
      >;

      export type LoginNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
        'Login',
  'Signin'
  
    >;