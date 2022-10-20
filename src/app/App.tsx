import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from 'react-router-dom';
import Login from "../common/components/login/Login";
import MainPage from "../common/components/mainPage/MainPage";
import {GET_POKEMON_ID} from "../utils/queries";


function App() {
  
   const PokemonQuery = () => {
   //const { loading, error, data } = useQuery(GET_POKEMON);
   const { loading, error, data } = useQuery(GET_POKEMON_ID, {
    variables: {
      input: 1
    }
   });
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
