import { useQuery } from "@apollo/client";
import { GET_POKEMON_ORDERID } from "../app/App";
import Card from "../common/components/card/Card";
import Header from "../common/components/header/Header";
import { Pokemon } from "../types/pokemon.utils";

const MainPage = () => {

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-6 px-32 py-20 ">
      </div>
    </div>
  );
};

export default MainPage;
