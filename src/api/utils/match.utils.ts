import { gql, useQuery } from "@apollo/client";
const GET_POKEMON = gql`
  query {
    getPokemon {
      name
      pokemonID
      attack
      defence
      sp_attack
      sp_defence
      speed
      height
      weight
      hp
      imageUrl
      type1
      type2
    }
  }
`;

const PokemonQuery = () => {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }
  console.log(data);
};

PokemonQuery();
const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const getImageUrl = (pokemonID: number) => {
  return `${imageUrl}/other/official-artwork/${pokemonID}.png`;
};
