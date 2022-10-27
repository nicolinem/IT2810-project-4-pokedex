import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../app/App";
import Card from "../common/components/card/Card";
import CommentField from "../common/components/commentField/CommentField";
import Comments from "../common/components/commentField/Comments";
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
      <Comments></Comments>
      <CommentField></CommentField>
      <div className="grid grid-cols-4 gap-4 py-20 ">
        {data &&
          !loading &&
          !error &&
          data.getPokemon.map((pokemon: Pokemon) => {
            return <Card pokemon={pokemon}></Card>;
          })}
      </div>
    </div>
  );
};

export default MainPage;
