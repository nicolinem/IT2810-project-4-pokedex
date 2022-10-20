import { useQuery } from "@apollo/client";
import { Card } from "@mui/material";
import { GET_POKEMON } from "../app/App";
import Header from "../common/components/header/Header";

const MainPage = () => {
  const { loading, error, data } = useQuery(GET_POKEMON);

  return (
    <div>
      <Header></Header>
      <Card></Card>
    </div>
  );
};

export default MainPage;
