import React, {useState } from "react";

import Button from "./Button";
import InputField from "./InputField";


function SearchForm() {

  const [pokemonNameNumberInputField, setRepoNameInput] = useState("");

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoNameInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //TODO
  };

  return (
      <form onSubmit={handleSubmit}>
          <InputField
            onChange={onChangeSearchField}
            name="Pokemon name or number"
            placeholder="Enter pokemon name or number"
            value={pokemonNameNumberInputField}
          />

        <Button>
          Search
        </Button>
      </form>
  );
}

export default SearchForm;
