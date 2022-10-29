import { useQuery } from "@apollo/client";
import { GET_POKEMON_ORDERID } from "../app/App";
import Card from "../common/components/card/Card";
import Header from "../common/components/header/Header";
import { Pokemon } from "../types/pokemon.utils";

const MainPage = () => {
  const PokemonQuery = () => {
    const { loading, error, data } = useQuery(GET_POKEMON_ORDERID);

    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
    console.log(data);

    return { loading, error, data };
  };

  const { data, error, loading } = PokemonQuery();

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-4 py-20 ">
        {data &&
          !loading &&
          !error &&
          data.getPokemonFromID.map((pokemon: Pokemon) => {
            return <Card pokemon={pokemon}></Card>;
          })}
      </div>
    </div>
  );
};

export default MainPage;
