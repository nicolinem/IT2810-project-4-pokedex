import React, { useState } from "react";
import Navbar from "../common/components/Navbar";
import SearchForm from "../common/components/SearchForm";
import Login from "../common/components/login/Login";
import MainPage from "../common/components/mainPage/MainPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [token, setToken] = useState();
  
  return (
    <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
