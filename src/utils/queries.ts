import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
  query {
    getPokemon {
        name
    }
}
`;

export const GET_POKEMON_ID = gql`
  query ($input: Int) {
    getPokemonOnID(input: $input) {
      name
      height
      weight
      speed
      sp_attack
      sp_defence
      attack
      defence
      type1
      type2
      hp
      imageUrl
    }
      
  }
`;

export const GET_POKEMON_NAME = gql`
  query ($input: String) {
    getPokemonOnPrefix(input: $input) {
      name
      height
      weight
      speed
      sp_attack
      sp_defence
      attack
      defence
      type1
      type2
      hp
      imageUrl
    }
  }
`;

