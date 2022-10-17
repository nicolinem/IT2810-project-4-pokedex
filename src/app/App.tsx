import Login from "../common/components/login/Login";
import MainPage from "../common/components/mainPage/MainPage";
import { Route, Routes } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";


function App() {


  const GET_POKEMON = gql`
  query {
    getPokemon {
        name
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


  
  return (
    <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
