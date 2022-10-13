import React from "react";
import Navbar from "../common/components/Navbar";
import SearchForm from "../common/components/SearchForm";
import TypeChipContainer from "../common/components/TypeChipContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar></Navbar>
      <SearchForm></SearchForm>
      <TypeChipContainer></TypeChipContainer>
    </div>
  );
}

export default App;
