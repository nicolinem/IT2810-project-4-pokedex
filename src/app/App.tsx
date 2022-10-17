import Login from "../common/components/login/Login";
import MainPage from "../common/components/mainPage/MainPage";
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
