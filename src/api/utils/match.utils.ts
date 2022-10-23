const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const getImageUrl = (pokemonID: number) => {
  return `${imageUrl}/other/official-artwork/${pokemonID}.png`;
};
