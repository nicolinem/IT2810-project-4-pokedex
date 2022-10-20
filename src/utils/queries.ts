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
        pokemonID
        name
        type1
        type2
        HP
    }
      
  }
`;
