import React from "react";
import Navbar from "../common/components/Navbar";
import SearchForm from "../common/components/SearchForm";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar></Navbar>
      <SearchForm fetchData={function (projectName: string, token: string): void {
        throw new Error("Function not implemented.");
      } }></SearchForm>
    </div>
  );
}

export default App;
