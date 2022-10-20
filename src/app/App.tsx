import Login from "../views/Login";
import MainPage from "../views/MainPage";
import { Route, Routes } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import useProfile from "../hooks/useProfile";
import Register from "../views/Register";


function App() {

  const { refetch } = useProfile(); 

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
  }
   

  PokemonQuery();

  
  return (
    <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
