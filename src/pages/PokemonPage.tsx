import { useParams } from "react-router-dom";

export const PokemonPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log("hello")
  return <div>Hello Pokemon: {id }</div>;
};
