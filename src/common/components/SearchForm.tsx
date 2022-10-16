import React, { useState } from "react";

import Button from "./button/Button";
import InputField from "./InputField";

function SearchForm() {
  const [pokemonNameNumberInputField, setRepoNameInput] = useState("");

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoNameInput(event.target.value);
  };

  const buttonClicked = () => {};

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

      <Button onClick={() => buttonClicked()}>Search</Button>
    </form>
  );
}

export default SearchForm;
