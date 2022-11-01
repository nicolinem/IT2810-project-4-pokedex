import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';



export const usePokemonQuery = (name: string, types: String[], offset: number = 0) => {

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
    limit: 24,
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

