import { useQuery } from "@apollo/client";
import { GET_POKEMON_ORDERID } from "../app/App";
import Card from "../common/components/card/Card";
import Header from "../common/components/header/Header";
import { Pokemon } from "../types/pokemon.utils";

const MainPage = () => {

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-6 px-32 py-20 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
