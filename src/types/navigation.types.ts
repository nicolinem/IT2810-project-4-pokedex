import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type StackNavigatorParamList = {
  Home: undefined;
  Pokemon: {
    id: number;
  };
};

export type CardNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Home'
    >;

    export type PokemonScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'Pokemon'
>;