import React from "react";
import Navbar from "../common/components/Navbar";
import SearchForm from "../common/components/SearchForm";
import TypeButtonContainer from "../common/components/TypeButtonContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar></Navbar>
      <SearchForm></SearchForm>
      <TypeButtonContainer></TypeButtonContainer>
    </div>
  );
}

export default App;
