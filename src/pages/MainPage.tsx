import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../app/App";
import Card from "../common/components/card/Card";
import SearchForm from "../common/components/SearchForm";
import { Pokemon } from "../types/pokemon.utils";

const MainPage = () => {
  const PokemonQuery = () => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
    console.log(data);

    return { loading, error, data };
  };

  const { data, error, loading } = PokemonQuery();

  return (
    <div>
      {
      /*<Header></Header>
      <Card></Card> */
      <SearchForm></SearchForm>
      }
      {data &&
        !loading &&
        !error &&
        data.getPokemon.map((pokemon: Pokemon) => {
          return <Card pokemonType={data.type1} pokemon={pokemon}></Card>;
        })}
    </div>
  );
};

export default MainPage;
