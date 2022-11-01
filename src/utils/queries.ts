import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';



export const GET_POKEMON = gql`
  query {
    getPokemonFromID {
       pokemonID
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




export const usePokemonQuery = (name: string, types: String[], offset: number = 0) => {
    const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
  const isLetters = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  let query;
  let variables;

  if (name.length < 1 && types.length < 1) {
    query = POKEMON;
    variables = { offset: offset }
  } else if (types.length < 1) {
    query = POKEMON_WITH_NAME;
    variables = { offset: offset, name: name }
  } else if (name.length < 1) {
    query = POKEMON_WITH_TYPE;
    variables = { offset: offset, types: types }
  } else {
    query = POKEMON_WITH_NAME_AND_TYPE;
    variables = { offset: offset, types: types, name:name }
  }

  const { loading, error, data, fetchMore } = useQuery(query, { variables: variables, });
  
  return { loading, error, data, fetchMore };

}
export const POKEMON_WITH_NAME_AND_TYPE = gql`
query Pokemon($name: String, $types: [String], $offset: Int = 0) {
  pokemon( where: {
    name_STARTS_WITH: $name,
    AND: {OR: [
      { type1_IN: $types }
      { type2_IN: $types}
    ],}
  } ,
  options: {
    limit: 25,
    skip: $offset
  }) {
     pokemonID
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

export const POKEMON_WITH_TYPE = gql`
query Pokemon($types: [String], $offset: Int = 0) {
  pokemon( where: {
 OR: [
      { type1_IN: $types }
      { type2_IN: $types}
    ],
  } ,
  options: {
    limit: 25,
    skip: $offset
  }) {
     pokemonID
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

export const POKEMON_WITH_NAME = gql`
query Pokemon($name: String, $offset: Int) {
  pokemon( where: {
    name_STARTS_WITH: $name},
  options: {
    limit: 25,
    skip: $offset
  }) {
     pokemonID
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

export const POKEMON = gql`
query Pokemon($offset: Int = 0) {
  pokemon(
  options: {
    limit: 25,
    skip: $offset
  }) {
     pokemonID
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




export const GET_POKEMON_ID = gql`
  query ($input: Int) {
    getPokemonOnID(input: $input) {
      pokemonID
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
      pokemonID
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
    pokemonID
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
    pokemonID
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

  export const GET_POKEMON_TYPE = gql`
    query ($types: [String]) {
      getPokemonFromType(types: $types) {
        pokemonID
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