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
    getPokemonOnName(input: $input) {
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

export const GET_POKEMON_NAME_TYPE = gql`
 query ($input: String, $types: [String]) {
  getPokemonOnNameAndType(input: $input, types: $types) {
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
 }`;

 export const GET_POKEMON_ID_TYPE = gql`
  query ($input: Int, $types: [String]) {
    getPokemonOnIDAndType(input: $input, types: $types) {
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
  }`;