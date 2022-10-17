import React from "react";
import Navbar from "../common/components/Navbar";
import SearchForm from "../common/components/SearchForm";

function App() {
  return (
    <div className="bg-[#0C1431]	h-[600px]">
      <header className="App-header" />
      <Navbar></Navbar>
      
      <SearchForm></SearchForm>
      
    </div>
  );
}

export default App;
