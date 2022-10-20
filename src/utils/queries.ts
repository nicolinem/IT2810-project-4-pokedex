import { gql } from '@apollo/client';

const GET_POKEMON = gql`
  query {
    getPokemon {
        name
    }
}
`;

export const GET_POKEMON_ID = gql`
  query GET_POKEMON_ID($input: Int) {
    getPokemonOnID($input: Int) {
        pokemonID
        name
        type1
        type2
        HP
    }
      
  }
`;
